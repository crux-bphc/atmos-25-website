import React from 'react';

const words = [
  '7 / 11 FRI - 9 / 11 SUN, HYD',
  '7 / 11 FRI - 9 / 11 SUN, HYD',
  '7 / 11 FRI - 9 / 11 SUN, HYD',
  '7 / 11 FRI - 9 / 11 SUN, HYD',
  '7 / 11 FRI - 9 / 11 SUN, HYD',
  '7 / 11 FRI - 9 / 11 SUN, HYD',
  '7 / 11 FRI - 9 / 11 SUN, HYD',
  '7 / 11 FRI - 9 / 11 SUN, HYD',
  '7 / 11 FRI - 9 / 11 SUN, HYD',
];

const Tape = () => {
  return (
    <div className="overflow-x-clip overflow-y-hidden z-2">
      <div className="-mx-1 bg-black">
        <div className="flex">
          <div className="flex flex-none animate-move-left gap-4 py-1 md:py-4 pr-4">
            {[...new Array(2)].fill(0).map((_, index) => (
              <React.Fragment key={index}>
                {words.map((word, wordIndex) => (
                  <div key={wordIndex} className="inline-flex items-center gap-4">
                    <span className="text-4xl font-[Helvetica] font-bold uppercase text-white">
                      {word}
                    </span>
										<span className="text-4xl font-[Helvetica] font-bold uppercase text-white">
											•
										</span>
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tape;
