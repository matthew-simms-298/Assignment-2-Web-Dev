import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-purple-200 text-black">
        <div class="w-screen h-12 border-b-black-2 text-center flex justify-evenly">
            <div class="w-1/3 border-r-black-2 pr-5 text-white bg-purple-800 pt-3">
              <image class="w-100 h-100" src="/images/logo.png" alt="J.A.W.N Academy Logo"></image>
            </div>
            <div class="w-1/3 border-r-black-2 pr-5 bg-purple-200 text-gray-700 font-bold pt-3 text-4x1">
                <a class="text-center" href="index.html">Homepage</a>
            </div>
            <div class="w-1/3 border-r-black-2 pr-5 text-white bg-purple-800 pt-3 text-3x1">
                <a class="text-center" href="temp.html">Students</a>
            </div>
            <div class="w-1/3 border-r-black-2 text-center text-white bg-purple-800 pt-3 text-3x1">
                <a class="text-center" href="weight.html">Configuration</a>
            </div>
        </div>
      
      <div className="bg-gray-100 p-10 m-10 rounded-lg shadow-md">
        <h1>Student List</h1>
      </div>

      <footer className="bg-purple-800 p-2 w-full pt-4 flex items-center justify-center border-b-yellow-100">
        <div className="flex flex-row text-md text-white">
          <div className="p-5">
            <p className="font-bold text-2xl">J.A.W.N. Academy</p>
            <p className="text-1x1 italic">(Just Another Weird Name)</p>
            <p className="text-xs italic">Since 1940</p>
          </div>
          <div className="p-5">
            <div>
              <p className="font-bold">Phone:</p>
            </div>
            <div>
              <p>+1 (403) 420-0898</p>
            </div>
          </div>
          <div className="p-5">
            <div>
              <p className="font-bold">Email:</p>
            </div>
            <div>
              <p className="underline">jawn.academy.admission@jawnacademy.ca</p>
              <p className="underline">jawn.academy@jawnacademy.ca</p>
            </div>
          </div>
          <div className="p-5">
            <div>
              <p className="font-bold">Address:</p>
            </div>
            <div>
              <p>8888 RIVER VIEW PKWY SW, Calgary, AB, Canada, T2T 2T2</p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
