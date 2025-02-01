import Image from 'next/image';
import { getNewsList } from '@/app/_libs/microcms';
import { TOP_NEWS_LIMIT } from '@/app/_constants';
import NewsList from '@/app/_components/NewsList';
import styles from './page.module.css';
import ButtonLink from '@/app/_components/ButtonLink';

export const revalidate = 60;

export default async function Page() {
  const data = await getNewsList({
    limit: TOP_NEWS_LIMIT,
  });
  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>金子妃茉莉</h1>
          <p className={styles.description}>
            Kaneko Himari
          </p>
        </div>
        <Image
          className={styles.bgimg}
          src="/img-mv.jpg"
          alt=""
          width={3600}
          height={1200}
          priority
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList articles={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">もっとみる</ButtonLink>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.horizontal}>
          <div>
            <h2 className={styles.sectionTitleEn}>Business</h2>
            <p className={styles.sectionTitleJa}>志望動機</p>
            <p className={styles.sectionDescription}>
              
              <br />
              AI、ロボット工学、自律システムなど、幅広い分野でのソリューション提供を通じて、社会の進化と未来の創造に貢献します。
            </p>
            <ButtonLink href="/business"></ButtonLink>
          </div>
          <Image
            className={styles.businessImg}
            src="/img-business.png"
            alt=""
            width={1024}
            height={1024}
          />
        </div>
      </section>
      <div className={styles.aboutus}>
        <section className={styles.section}>
          <div className={styles.horizontal}>
            <Image
              className={styles.aboutusImg}
              src="/img-aboutus.jpg"
              alt=""
              width={6000}
              height={4000}
            />
            <div>
              <h2 className={styles.sectionTitleEn}></h2>
              <p className={styles.sectionTitleJa}></p>
              <p className={styles.sectionDescription}>
                
              </p>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}></dt>
                <dd className={styles.infoDescription}>/dd>
              </dl>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}></dt>
                <dd className={styles.infoDescription}></dd>
              </dl>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}></dt>
                <dd className={styles.infoDescription}>
                  
                  <br />
                  
                </dd>
              </dl>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}></dt>
                <dd className={styles.infoDescription}></dd>
              </dl>
              <dl className={styles.info}>
                <dt className={styles.infoTitle}></dt>
                <dd className={styles.infoDescription}></dd>
              </dl>
            </div>
          </div>
        </section>
      </div>
      <section className={styles.section}>
        <div className={styles.horizontal}>
          <div>
            <h2 className={styles.sectionTitleEn}></h2>
            <p className={styles.sectionTitleJa}></p>
            <p className={styles.sectionDescription}>
              
              <br />
              
            </p>
            <ButtonLink href="">長所・短所へ</ButtonLink>
          </div>
          <Image
            className={styles.hiringImg}
            src="/img-hiring.jpg"
            alt=""
            width={960}
            height={960}
          />
        </div>
      </section>
    </>
  );
}
