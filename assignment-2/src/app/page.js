import StandardFooter from '../components/StandardFooter';
import StudentNames from '../components/StudentNames';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-purple-200 text-black">
        <div class="w-screen h-12 border-b-black-2 text-center flex justify-evenly">
            <div class="w-1/2 border-r-black-2 pr-5 bg-purple-200 text-gray-700 font-bold pt-3 text-4x1">
                <p class="text-center">Homepage</p>
            </div>
            <div class="w-1/2 border-r-black-2 pr-5 text-purple-200 bg-purple-800 pt-3 text-3x1">
                <a class="text-center" href="../configuration">Students</a>
            </div>
        </div>
      <div className="bg-gray-100 p-10 m-10 rounded-lg shadow-lg">
        <h1>Student List</h1>
       {/*<StudentNames/>*/}
      </div>
      <StandardFooter/>  
    </main>
  );
}
