function TemplateCard({ cardTitle = "Card" }) {
  return (
    <>
      {/*   */}
      <div
        className="
        bg-gray-900 rounded-2xl
        h-[35vh] min-h-[18vh] aspect-square 
        border-[2px] border-white p-[5%]
        template-card"
      >
        <div
          className="
          bg-gray-900
          border-8 border-white aspect-square max-w-[90%] mx-auto rounded-2xl m-[2%]
          view-borad"
        >
          {/* img or svg of tmeplate */}
        </div>
        <p
          className="
          font-bold  sm:text-base md:text-lg lg:text-xl mb-1
          card-title
          "
        >
          {`${cardTitle}`}
        </p>
      </div>
    </>
  );
}

export default TemplateCard;
