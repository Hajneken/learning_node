function main(callback) {
  console.log("Main is running ...");

  const data = { data: "Very important data" };

  callback(data);
}

main((data) => console.log("Callback is invoked!", data));

main((data) => console.log("Different callback is now invoked!", data));
