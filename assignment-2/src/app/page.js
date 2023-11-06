import StandardFooter from '../components/StandardFooter';
import Student from '../components/Student';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-purple-200 text-black">
        <div class="w-screen h-12 border-b-black-2 text-center flex justify-evenly">
            <div className="w-1/2 border-r-black-2 pr-5 bg-purple-200 text-gray-700 font-bold pt-3 text-4x1">
                <p className="text-center">Homepage</p>
            </div>
            <div className="w-1/2 border-r-black-2 pr-5 text-purple-200 bg-purple-800 pt-3 text-3x1">
                <a className="text-center hover:underline" href="../configuration">Students</a>
            </div>
        </div>
      <div className="bg-gray-100 p-10 m-10 w-1/3 flex items-center justify-center flex-col rounded-lg shadow-lg">
        <h1 className="mb-5 text-2xl">Student List</h1>
       <Student/>
      </div>
      <StandardFooter/>  
    </main>
  );
}
