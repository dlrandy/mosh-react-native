import client from "./client";

const endPoint = "/listings";

const getListings = () => client.get(endPoint);
const addListing = ({
  title,
  price,
  category,
  description,
  images,
  location,
}, onUploadProgress) => {
  const data = new FormData();
  data.append("title", title);
  data.append("price", price);
  data.append("categoryId", category.value);
  data.append("description", description);
  images.forEach((image, index) => {
    data.append("images", {
      name: "image" + index,
      type: "images/jpeg",
      uri: image,
    });
  });
  if (location) {
    data.append('location', JSON.stringify(location));

  }
  return client.post(endPoint, data,{
    onUploadProgress: progress => {
        onUploadProgress(progress.loaded/progress.total)
    },
  });
};
export { getListings, addListing, };
