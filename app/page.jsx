import Feed from "@components/Feed";

const Home = () => {
 return (
  <section className="w-full flex-center flex-col">
   <h1 className="head_text text-center">
    Discover & Share
    <br className="max-md:hidden" />
    <span className="orange_gradient text-center"> Powered by Stories, Inspired by You</span>
   </h1>
   <p className="desc text-center">
   StorySphere is an open-source platform designed for the modern world to discover, create, and share inspiring stories with a vibrant community
   </p>

   <Feed />
  </section>
 );
};
export default Home;
 