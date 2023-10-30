import StandardFooter from "@/components/StandardFooter";
export default function Configuration() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-purple-200 text-black">
            <div class="w-screen h-12 border-b-black-2 text-center flex justify-evenly">
                <div class="w-1/2 border-r-black-2 pr-5 bg-purple-800 text-white pt-3 text-4x1">
                    <a href="/" className="text-center">Homepage</a>
                </div>
                <div class="w-1/2 border-r-black-2 pr-5 text-gray-700 bg-purple-200 pt-3 text-3x1">
                    <p class="text-center font-bold">Students</p>
                </div>
            </div>
            <div className="bg-gray-100 p-10 m-10 rounded-lg shadow-lg">
                <h1 className="text-4xl font-bold text-center p-1 mb-15">Add Student Information</h1>
                <form>
                    <div className="flex flex-col items-center justify-center">
                        <label htmlFor="FirstName">First Name:</label>
                        <input type="text" id="FirstName" name="FirstName" placeholder="Example: Marcus"className="border border-gray-500 rounded-md p-1 m-1 hover:bg-purple-200"/>
                        <label htmlFor="LastName">Last Name:</label>
                        <input type="text" id="LastName" name="LastName" placeholder="Example: DeMaximus" className="border border-gray-500 rounded-md p-1 m-1 hover:bg-purple-200"/>
                        <p>Birthdate:</p>
                        <p className="text-xs italic text-grey-300">Year, Month, Day</p>
                        <div className="">
                            {/*
                            <div>
                                <label htmlFor="birthyear">Year: </label>
                                <label htmlFor="birthmonth">Month: </label>
                                <label htmlFor="birthday">Day: </label>
                            </div>
                            */}
                            <div>
                                <input type="text" id="birthyear" name="birthyear" placeholder="2023" className="border border-gray-500 rounded-md p-1 m-1 w-12 hover:bg-purple-200"/>
                                <input type="text" id="birthday" name="birthday" placeholder="10" className="border border-gray-500 rounded-md p-1 m-1 w-7 hover:bg-purple-200"/>
                                <input type="text" id="birthmonth" name="birthmonth" placeholder="12" className="border border-gray-500 rounded-md p-1 m-1 w-7 hover:bg-purple-200"/>
                                
                            </div>
                        </div>
                        
                        <label htmlFor="grade">Grade: </label>
                        <input type="text" id="grade" name="grade" placeholder="12" className="border border-gray-500 rounded-md p-1 m-1 hover:bg-purple-200"/>                        
                        <button type="submit" className="border border-gray-500 rounded-md p-1 m-1 hover:bg-purple-200">Save</button>
                    </div>
                </form>
            </div>
            <StandardFooter/>
        </main>
    );
}