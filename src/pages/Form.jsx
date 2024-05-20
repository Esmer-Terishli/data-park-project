import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { MdPhotoCamera, MdOutlineDateRange } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

import "../pages/style.css";

import { Button } from "../common/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../common/components/ui/form";
import { Input } from "../common/components/ui/input";
import axios from "axios";

const formSchema = z.object({
  title: z.string(),
  image: z.instanceof(FileList),
  published_date: z.string(),
  author: z.string(),
  description: z.string(),
});

export function Forms() {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      image: undefined,
      published_date: "",
      author: "",
      description: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("image", data.image[0]);
      formData.append("published_date", data.published_date);
      formData.append("author", data.author);
      formData.append("description", data.description);

      const response = await axios.post(
        "https://dataparkbackend-production-f61d.up.railway.app/core/news/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  const fileRef = form.register("image");
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 flex flex-col justify-center h-screen my-28 mx-32"
      >
        <div className="formDetails rounded-md p-8">
          <h1>Post a New News</h1>
          <p>
            Hire top data talent for your company and elevate your data-driven
            capabilities!
          </p>

          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Name..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex space-x-4 my-8">
            <FormField
              control={form.control}
              name="author"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel className="flex">
                    <FaUserCircle className="text-lg mr-2" /> Author
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Author..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="published_date"
              render={({ field }) => (
                <FormItem className="w-1/2">
                  <FormLabel className="flex">
                    <MdOutlineDateRange className="text-lg mr-2" /> Date
                  </FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem className="my-8">
                <FormLabel>Add Photo</FormLabel>
                <FormControl>
                  <Input
                    {...fileRef}
                    // ref={fileInputRef}
                    type="file"
                    className=""
                    onChange={(e) => field?.onChange(e?.target?.files?.[0])}
                  />
                </FormControl>
                {/* <div className="flex items-center space-x-4">
                  <Button onClick={handleButtonClick}>
                    <MdPhotoCamera className="text-2xl" />
                  </Button>
                  <span>Add Photo (png.)</span>
                </div> */}

                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>News Description</FormLabel>
                <FormControl>
                  <textarea
                    className="newPostTitle shadow appearance-none border rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Input Text..."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit">Send</Button>
      </form>
    </Form>
  );
}

export default Forms;
