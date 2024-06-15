import Header from "./ui/header/Header";
import Main from "./ui/home/Main";
import Search from "./ui/home/Search";

export default function Home() {
  return (
    <div className=" flex justify-center">
      <div className=" w-[1500px]">
        <Header />
        <Search />
        <Main />
      </div>
    </div>
  );
}
