import { Link } from "lucide-react";

function TripCard({ productList, setInput }) {
  const handleCopyUrl = (url) => {
    navigator.clipboard
      .writeText(url)
      .then(() => {
        alert("คัดลอก URL แล้ว!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <>
      {productList.map((item, index) => (
        <div className="flex justify-center items-center mx-5 " key={index}>
          <div className="flex flex-row my-9 h-60 w-full ">
            <div className="flex w-1/3">
              <img
                src={item.photos[0]}
                alt={item.title}
                className="rounded-xl mr-7 w-full object-cover"
              />
            </div>
            <div className="w-2/3 leading-relaxed text-xl pl-7">
              <div>
                <a href={item.url} target="_blank">
                  {" "}
                  {item.title}
                </a>
              </div>
              <div>
                <span className="text-sm">
                  {item.description.length > 100
                    ? `${item.description.substring(0, 100)}...`
                    : item.description}
                </span>
              </div>
              <div className=" text-sm">
                <div>
                  <a
                    href={item.url}
                    target="_blank"
                    className="cursor-pointer text-blue-300 underline"
                  >
                    {" "}
                    อ่านต่อ{" "}
                  </a>
                </div>
                <div className="flex space-x-6 text-sm py-2">
                  <div>
                    <p>หมวด</p>
                  </div>

                  {item.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="underline  cursor-pointer"
                      onClick={() => setInput(tag)}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex relative">
                <div className="flex space-x-4 ">
                  {item.photos.slice(1, 4).map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={item.title}
                      className="w-1/6 rounded-xl"
                    />
                  ))}
                </div>
                <div
                  className="absolute bottom-0 right-0 bg-white border border-blue-500 rounded-full p-2 cursor-pointer "
                  onClick={() => handleCopyUrl(item.url)}
                >
                  <Link className="text-blue-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default TripCard;
