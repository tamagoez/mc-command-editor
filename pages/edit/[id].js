// https://zenn.dev/trictrac/articles/4377beaf0953856b7a0e

import dynamic from "next/dynamic";

const Editor = dynamic(import("../components/Editor/index"), { ssr: false });

export default function Home() {
  return (
    <div className='container'>
      <Editor />
    </div>
  );
}
