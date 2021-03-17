import Layout from '../components/Layout';
import Feed from '../components/Feed';
import Suggestions from '../components/Suggestions';
import { openDB } from '../lib/openDB';

function Index({ posts }) {
  return (
    <Layout>
      <Feed posts={posts}></Feed>
      <Suggestions></Suggestions>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const db = await openDB();
  const data = await db.collection('feed').find().toArray();

  /*  const data = [
    {
      id: 1,
      author: {
        id: 1,
        avatar:
          'https://yt3.ggpht.com/ytc/AAUvwnheM-lH68E72YnzjFHutMw-OQ1oh5OvfbXr1ruwww=s48-c-k-c0x00ffffff-no-rj',
        name: 'Mateus Nunes',
        username: 'mateusnunes',
      },
      description: 'descrição',
      tags: [{ title: '#youtube' }, { title: '#clone' }, { title: '#teste' }],
      songName: 'DRUGS - Tai Verdes',
      videoUrl:
        'https://v16m.tiktokcdn.com/6463544a097c534121bf6a3fbbfb210d/60447372/video/tos/useast2a/tos-useast2a-ve-0068c004/537a730a7b01449ea1010706f2eaa25e/?a=1233&br=3096&bt=1548&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=2021030700314601019021920720743DEB&lr=tiktok_m&mime_type=video_mp4&pl=0&qs=0&rc=ajpudnM8dTo8MzMzODczM0ApZjQ1Zjs1Z2RlN2VmZTg5NGc1Z3BoZC1eZjFgLS0uMTZzczIwNmJfNl5gMF9jNWFfLV86Yw%3D%3D&vl=&vr=',
      likes: 650,
      comments: 10,
      replies: 50,
    },
    {
      id: 2,
      author: {
        id: 1,
        avatar:
          'https://yt3.ggpht.com/ytc/AAUvwnheM-lH68E72YnzjFHutMw-OQ1oh5OvfbXr1ruwww=s48-c-k-c0x00ffffff-no-rj',
        name: 'Mateus Nunes',
        username: 'mateusnunes',
      },
      description: 'descrição2',
      tags: [{ title: '#youtube' }, { title: '#clone' }, { title: '#teste' }],
      songName: 'Originalton - YZ',
      videoUrl:
        'https://v16m.tiktokcdn.com/42b3648fe4f4cbb7668fa15e583932ee/6044734f/video/tos/useast2a/tos-useast2a-ve-0068c003/26ddcfe2302b410db8ad422347429673/?a=1233&br=3522&bt=1761&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202103070031220101902090834375C6E4&lr=tiktok_m&mime_type=video_mp4&pl=0&qs=0&rc=anF0bXBvNGY2MzMzOzczM0ApZzk0aTc8NmRlNzhmNDc6OGdkL2kyNTJjMm9gLS1iMTZzcy4yLy4tYy5iYC5eL2AvNTQ6Yw%3D%3D&vl=&vr=',
      likes: 650,
      comments: 10,
      replies: 50,
    },
  ]; */

  return {
    props: {
      posts: JSON.parse(JSON.stringify(data)),
    },
  };
}

export default Index;
