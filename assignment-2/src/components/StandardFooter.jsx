import react from 'react';
export default function StandardFooter() {
    return (
        <footer className="bg-purple-800 p-2 w-full pt-4 flex items-center justify-center border-b-yellow-100">
        <div className="flex flex-row text-md text-white">
          <div className="p-5">
            <p className="font-bold text-2xl">New Generation Highschool</p>
            <p className="text-s italic">Since 1940</p>
          </div>
          <div className="p-5">
            <div>
              <p className="font-bold">Phone:</p>
            </div>
            <div>
              <p>+1 (403) 420-9681</p>
            </div>
          </div>
          <div className="p-5">
            <div>
              <p className="font-bold">Email:</p>
            </div>
            <div>
              <p className="underline">newgenhigh.administration@ngh.ca</p>
              <p className="underline">newgenhigh@ngh.ca</p>
            </div>
          </div>
          <div className="p-5">
            <div>

              <p className="font-bold">Address:</p>
            </div>
            <div>
              <p>8888 Riverside PKWY NW, Calgary, AB, Canada</p>
            </div>
          </div>
        </div>
      </footer>
    );
}