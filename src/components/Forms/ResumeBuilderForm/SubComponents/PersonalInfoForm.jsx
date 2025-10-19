import { useEffect, useRef } from "react";
import { useFormContext } from "react-hook-form";
function PersonalInfoForm() {
    const { register } = useFormContext();
    const textAreaRef = useRef(null);

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
                    <input
                        type="file"
                        accept="image/*"
                        {...register("photo", {
                            required: false,
                            validate: (files) => {
                                if (files && files.length > 0) {
                                    const file = files[0];
                                    const validType = ["image/jpeg", "image/png", "image/jpg"];
                                    if (!validType, include(file.type)) {
                                        return "Only JPG, JPEG, & PNG images are allowed."
                                    }

                                    if (file.size > 2 * 1024 * 1024) {
                                        return "File size must be less than 2 MB."
                                    }
                                }
                                return true;
                            },
                        })}

                        placeholder="Profile Pic"
                        className="border rounded-[50%] px-3 py-2 aspect-square w-30 sm:w-20 md:w-25"
                    />
                    <div className="grid gap-3 w-full">
                        <input
                            {...register("name", { required: true })}
                            placeholder="Full name"
                            className="border rounded px-3 py-2"
                        />
                        <input
                            {...register("email", { required: true })}
                            placeholder="Email"
                            className="border rounded px-3 py-2"
                        />
                    </div>
                </div>
                <div className="grid gap-3 w-full">
                    <input
                        {...register("headline")}
                        placeholder="Headline"
                        className="border rounded px-3 py-2"
                        type="text"
                    />
                    <input
                        {...register("profileLink")}
                        placeholder="Profile Link       **Linkedin or Any Social Media Link"
                        className="border rounded px-3 py-2"
                        type="text"
                    />
                    <textarea
                        {...register("address")}
                        placeholder="Address"
                        className="border rounded px-3 py-2 resize-none overflow-hidden"
                        type="text"
                        ref={(e) => {
                            textAreaRef.current = e;
                            register("address").ref(e);
                        }}
                    />
                </div>
            </section>
        </>
    );
}

export default PersonalInfoForm;
