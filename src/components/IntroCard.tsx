// interface Props {
//   name: string;
//   intro: string;
// }

// const IntroCard = ({ name, intro }: Props) => {
//   return (
//     <div className="border rounded-lg p-4 shadow bg-white w-full min-h-[150px] transform transition-transform hover:-translate-y-1 hover:shadow-lg">
//       <h3 className="font-bold text-lg mb-2">{name}</h3>
//       <p className="text-sm text-gray-700 break-words">
//         {intro}
//       </p>
//     </div>
//   );
// };

// export default IntroCard;
interface Props {
  name: string;
  intro: string;
}

const IntroCard = ({ name, intro }: Props) => {
  return (
    <div className="transform transition-transform duration-300 hover:-translate-y-2">
      <div className="border rounded-lg p-4 shadow bg-white w-full h-56 overflow-hidden hover:shadow-xl">
        <h3 className="font-bold text-lg mb-2">{name}</h3>
        <div className="text-sm text-gray-700 overflow-y-auto h-[calc(100%-2.5rem)] pr-1">
          {intro}
        </div>
      </div>
    </div>
  );
};


export default IntroCard;
