import "../pages/style.css";

const Form = () => {
  return (
    <>
      <div className="flex flex-col justify-center h-screen my-32">
        <form className="shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-32">
          <div className="mb-8">
            <p className="newPost font-bold">Post a New News</p>
            <p className="newPostTitle">
              Hire top data talent for your company and elevate your data-driven
              capabilities!
            </p>
          </div>

          <div className="mb-4">
            <label
              className="newPostTitle block text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="newPostTitle shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Name..."
            />
          </div>
          <div className="mb-6 flex">
            <div className="w-1/2 mr-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="author"
              >
                Author
              </label>
              <input
                className="newPostTitle shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="author"
                type="password"
                placeholder="Author..."
              />
            </div>

            <div className="w-1/2 ml-4">
              <label
                className="newPostTitle block text-sm font-bold mb-2"
                htmlFor="date"
              >
                Date
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="date"
                type="date"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              className="newPostTitle block text-sm font-bold mb-2"
              htmlFor="photo"
            >
              Add Photo
            </label>
            <input
              className="newPostTitle appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="photo"
              type="file"
            />
          </div>

          <div className="mb-4">
            <label
              className="newPostTitle block text-sm font-bold mb-2"
              htmlFor="message"
            >
              News Description
            </label>
            <textarea
              className="newPostTitle shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder="Input Text..."
            />
          </div>


        </form>
        <div className="flex items-center justify-end mr-32">
          <button
            className="formButton text-white font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
