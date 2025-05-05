import base from "./options.js";

export default async function upload(payload) {
  try {
    // Attempt to upload the payload
    const { public_id } = await base.upload(payload, {
      format: "webp", // Optional: if you want to convert to webp format
    });

    return public_id;
  } catch (err) {
    // Log the error details if something goes wrong
    console.error("Cloudinary upload failed:", err.message || err);
    throw err; // Optionally re-throw the error if you need to handle it further up the call stack
  }
}
