export const Gif = ({ gif }) => {
  return (
    <img
      className=" w-full sm:w-64 md:w-64 lg:w-64 h-64 object-cover rounded-lg"
      src={gif.images.original.url}
      alt={gif.title}
    />
  );
};
