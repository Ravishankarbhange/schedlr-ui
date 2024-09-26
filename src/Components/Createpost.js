import { useState } from "react";

const CreatePost = () => {
  const [uploadImage, setUploadImage] = useState(
    "https://www.lifewire.com/thmb/TRGYpWa4KzxUt1Fkgr3FqjOd6VQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cloud-upload-a30f385a928e44e199a62210d578375a.jpg"
  );

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="createPost flex justify-center py-5">
      <div className="bg-slate-200  h-[550px] w-[500px]">
        {console.log(uploadImage)}
        <img className="h-[510px] w-full" src={uploadImage} />
        <input
          id="fileInput"
          className="hidden"
          type="file"
          onChange={handleChange}
        />
        <button
          className="bg-[#395168] w-full h-[40px] font-bold text-white"
          onClick={triggerFileInput}
        >
          Upload Image
        </button>
      </div>
      <div className="w-[410px] h-[550px]">
        <div id="inputText">
          <input className="w-full h-[355px] border border-black" type="text" />
        </div>
        <div id="platformSelection" className="flex border border-black h-[195px]">
          <div className="flex flex-col w-full px-3">
            <label className="flex justify-around my-2">
              <input class="custom-checkbox" type="checkbox" name="option1" />
              <i class="fa-brands fa-twitter fa-2xl my-4"></i>
              <h2 className="font-rajdhani text-xl mt-1">Twitter</h2>
            </label>
            <label className="flex justify-around my-2">
              <input class="custom-checkbox" type="checkbox" name="option2" />
              <i class="fa-brands fa-facebook fa-2xl my-4"></i>
              <h2 className="font-rajdhani text-xl mt-1">facebook</h2>
            </label>
            <label className="flex justify-around my-2">
              <input class="custom-checkbox" type="checkbox" name="option3" />
              <i class="fa-brands fa-linkedin fa-2xl my-4"></i>
              <h2 className="font-rajdhani text-xl mt-1">linkedin</h2>
            </label>
            <label className="flex justify-around my-2">
              <input class="custom-checkbox" type="checkbox" name="option4" />
              <i class="fa-brands fa-instagram fa-2xl my-4"></i>
              <h2 className="font-rajdhani text-xl mt-1">Instagram</h2>
            </label>
          </div>
          <div id="uploadButtons flex flex-col flex-start" className="p-6">
            <button className="bg-[#496885] p-2 text-white rounded-sm">Post Now</button>
            <p className="my-4">Schedule your post at </p>
            <input className="bg-[#496885] p-2 text-white rounded-sm" type="datetime-local"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
