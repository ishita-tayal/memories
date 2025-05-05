export default function genImageUrl(public_id, options) {
  return `https://res.cloudinary.com/${process.env.CLOUDINARY_NAME}/image/upload/${options}/${public_id}`;
}
