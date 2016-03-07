Cloudinary.config({
  cloud_name: 'amanbayev',
  api_key: '628811745233567',
  api_secret: '4U3r3eoUxin04bnAOAdvaTHmTj8'
});

Cloudinary.rules["delete"] = function() {
  return true;
};

Cloudinary.rules.signature = function() {
  return true;
};

Cloudinary.rules.private_resource = function() {
  return true;
};

Cloudinary.rules.download_url = function() {
  return true;
};
