import React from 'react';
import clsx from 'clsx';
import { Row, Col, Carousel } from 'react-bootstrap';
import Translate from '@docusaurus/Translate';

import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: string;
  description: JSX.Element;
  later?: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Q&A Platform',
    icon: require('@site/static/img/feature-1.png').default,
    description: (
      <Translate id="feature-1">
        Help members with questions and boost community participation. Your
        experts are happy to contribute, verify, upvote correct info. Your info
        keeping up-to-date and trusted.
      </Translate>
    ),
  },
  {
    title: 'Organized',
    icon: require('@site/static/img/feature-2.png').default,
    description: (
      <Translate id="feature-2">
        Use tags to organize questions and help contents into categories. They
        make knowledge easy to find for others. Use the search to quickly find
        the answer.
      </Translate>
    ),
  },
  {
    title: 'Integrations',
    icon: require('@site/static/img/feature-3.png').default,
    description: (
      <Translate id="feature-3">
        Configure your community with plugins and your favorite services. So
        that you can improve your workflow, grow your community, or make your
        other tools better.
      </Translate>
    ),
    later: <Translate>Coming soon</Translate>,
  },
  {
    title: 'Gamification',
    icon: require('@site/static/img/feature-4.png').default,
    description: (
      <Translate id="feature-4">
        We've gamified the Q&A platform with reputation and badges. So the
        community members and teams have fun collaborating and getting work
        done.
      </Translate>
    ),
    later: <Translate>Coming soon</Translate>,
  },
];

function Feature({ title, icon, description, later }: FeatureItem) {
  return (
    <Col  sm={12} md={6} lg={3} className="mb-4">
      <div className="mb-3">
        <img className={styles.featureSvg} role="img" src={icon} />
      </div>
      <h2 style={{ fontWeight: 500 }}>{title}</h2>
      <p>{description}</p>
      {later && <div className={styles.badge}>{later}</div>}
    </Col>
  );
}

export default function HomepageFeatures(): JSX.Element {
  const bannerList = [
    {
      laptop: require('@site/static/img/home-laptop@2x.png').default,
      mobile: require('@site/static/img/home-mobile@2x.png').default,
    },
    {
      laptop: require('@site/static/img/detail-laptop@2x.png').default,
      mobile: require('@site/static/img/detail-mobile@2x.png').default,
    },
    {
      laptop: require('@site/static/img/profile-laptop@2x.png').default,
      mobile: require('@site/static/img/profile-mobile@2x.png').default,
    },
  ];
  return (
    <div className="container">
      <div className='position-relative'>
        <Carousel fade controls={false} indicators={false} interval={5000}>
          {bannerList.map((banner) => {
            return (
              <Carousel.Item key={banner.laptop}>
                <section>
                  <div className={styles.screenContent}>
                      <div className={styles.pcScreen}>
                        <img
                          src={banner.laptop}
                          alt=""
                          width="100%"
                          height="auto"
                          className={clsx('d-block', styles.smmothImg)}
                        />
                      </div>

                    <div className={styles.screenMobile}>
                      <img
                        src={banner.mobile}
                        alt=""
                        width="100%"
                        height="auto"
                        className={clsx('d-block', styles.smmothImg)}
                      />
                    </div>
                  </div>
                </section>
              </Carousel.Item>
            );
          })}
        </Carousel>
        {/* this is for shadow */}
        <div className={styles.shadowWrap}>
          <div className={styles.screenContent}>
            <div className={clsx(styles.pcScreen, styles.shadow)}>
              <img
                src={require('@site/static/img/home-laptop@2x.png').default}
                alt=""
                width="100%"
                height="auto"
                className={clsx('d-block', styles.smmothImg)}
              />
            </div>

            <div className={clsx(styles.screenMobile, styles.shadow2)}>
              <img
                src={require('@site/static/img/home-mobile@2x.png').default}
                alt=""
                width="100%"
                height="auto"
                className={clsx('d-block', styles.smmothImg)}
              />
            </div>
          </div>
        </div>
      </div>

      <Row className="row justify-content-center">
        <Col className="col-12">
          <section>
            <h3 className="text-center ff-headline mb-5 h1">
              <Translate>Features</Translate>
            </h3>
            <div className={styles.features}>
              <div className="row">
                {FeatureList.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>

          <section style={{ marginBottom: '96px' }}>
            <h3 className="text-center ff-headline h1">
              <Translate>We welcome all contributions</Translate>
            </h3>
            <p className="text-center text-secondary mb-4 fs-20">
              <Translate>
                Here are some quick ways you can help the community.
              </Translate>
            </p>
            <div className={styles.linkWrap}>
              <ul>
                <li className={clsx('mb-2', styles.li)}>
                  <a href="https://github.com/answerdev/answer">
                    <Translate>
                      Contribute to our open-source codebase on GitHub
                    </Translate>
                  </a>
                </li>
                <li className={clsx('mb-2', styles.li)}>
                  <a href="https://github.com/answerdev/answer.dev">
                    <Translate>Help us improve the docs</Translate>
                  </a>
                </li>
                <li className={styles.li}>
                  <a href="https://crowdin.com/project/answer" target="_blank">
                    <Translate>Help us translate language resources</Translate>
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </Col>
      </Row>
    </div>
  );
}
