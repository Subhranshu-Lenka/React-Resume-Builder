import { useEffect, useRef, useState } from "react";
import { useFormContext } from "react-hook-form";
import InputError from "../../InputErrors/InputError";
function PersonalInfoForm() {
  const {
    register,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext();
  const textAreaRef = useRef(null);
  const [previewImg, setPreviewImg] = useState(null);

  const file = watch("photo");

  useEffect(() => {
    if (file && file[0]) {
      const url = URL.createObjectURL(file[0]);
      setPreviewImg(url);
      return () => URL.revokeObjectURL(url); // cleanup
    }
    // else {
    //     setPreviewImg(null);
    // }
  }, [file]);

  const clearPhoto = (e) => {
    e.stopPropagation();
    setPreviewImg(null);
    setValue("photo", null);
  };

  useEffect(() => {
    const textArea = textAreaRef.current;

    const resize = () => {
      if (!textArea) return;
      textArea.style.height = "auto";
      textArea.style.height = textArea.scrollHeight + "px";
    };

    resize();

    textArea.addEventListener("input", resize);
    return () => textArea.removeEventListener("input", resize);
  }, []);

  return (
    <>
      <section className="grid gap-3">
        <h2 className="text-xl font-semibold mb-3">Personal Information</h2>
        <div className="grid grid-cols-[auto_1fr] gap-4 field-container">
          <div
            className={`relative inline-block ${
              errors.photo ? "border-red-500" : ""
            }`}
          >
            {previewImg && (
              <button
                onClick={clearPhoto}
                className="absolute -top-2 -right-2 
                                rounded-[50%] px-2 z-10
                                text-red-500  hover:bg-red-500 hover:text-white"
              >
                x
              </button>
            )}
            <label
              htmlFor="photo"
              className="relative overflow-hidden cursor-pointer border-3 rounded-[50%] px-3 py-2 aspect-square w-30 sm:w-20 md:w-25 grid place-items-center"
            >
              {previewImg ? (
                <img
                  src={previewImg}
                  alt="preview"
                  className="absolute inset-0 w-full h-auto object-cover"
                />
              ) : (
                <span>Profile Pic</span>
              )}
              <input
                id="photo"
                type="file"
                accept="image/*"
                {...register("photo", {
                  required: false,
                  validate: (files) => {
                    if (files && files.length > 0) {
                      const file = files[0];
                      const validType = [
                        "image/jpeg",
                        "image/png",
                        "image/jpg",
                      ];
                      if ((!validType, include(file.type))) {
                        return "Only JPG, JPEG, & PNG images are allowed.";
                      }

                      if (file.size > 2 * 1024 * 1024) {
                        return "File size must be less than 2 MB.";
                      }
                    }

                    return true;
                  },
                })}
                placeholder="Profile Pic"
                // className="border rounded-[50%] px-3 py-2 aspect-square w-30 sm:w-20 md:w-25"
                className="hidden"
              />
              <InputError message={errors.photo?.message} />
            </label>
          </div>

          <div className="grid gap-3 w-full">
            <div>
              <input
                {...register("name", { required: true })}
                placeholder="Full name"
                className={`border rounded px-3 py-2 w-full ${
                  errors.name ? "border-red-500" : ""
                }`}
              />
              <InputError message={errors.name?.message} />
            </div>
            <div>
              <input
                {...register("email", { required: true })}
                placeholder="Email"
                className={`border rounded px-3 py-2 w-full ${
                  errors.email ? "border-red-500" : ""
                }`}
              />
              <InputError message={errors.email?.message} />
            </div>
          </div>
        </div>
        <div className="grid gap-3 w-full">
          <div>
            <input
              {...register("headline")}
              placeholder="Headline"
              className={`border rounded px-3 py-2 w-full ${
                errors.headline ? "border-red-500" : ""
              }`}
              type="text"
            />
            <InputError message={errors.headline?.message} />
          </div>
          <div>
            <input
              {...register("profileLink")}
              placeholder="Profile Link       **Linkedin or Any Social Media Link"
              className={`border rounded px-3 py-2 w-full ${
                errors.profileLink ? "border-red-500" : ""
              }`}
              type="text"
            />
            <InputError message={errors.profileLink?.message} />
          </div>
          <div>
            <textarea
              {...register("address")}
              placeholder="Address"
              className={`border rounded px-3 py-2 resize-none overflow-hidden w-full ${
                errors.profileLink ? "border-red-500" : ""
              }`}
              type="text"
              ref={(e) => {
                textAreaRef.current = e;
                register("address").ref(e);
              }}
            />
            <InputError message={errors.address?.message} />
          </div>
        </div>
      </section>
    </>
  );
}

export default PersonalInfoForm;
