import { cn } from "@/lib/utils";
import { IconUpload } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useDropzone } from "react-dropzone";

const mainVariant = {
  initial: {
    x: 0,
    y: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 0.9,
  },
};

const secondaryVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const FileUpload = ({
  onChange,
  accept = {
    "application/pdf": [".pdf"],
    "text/plain": [".txt"],
    "text/csv": [".csv"],
  },
  multiple = true,
}: {
  onChange?: (files: File[]) => void;
  accept?: Record<string, string[]>;
  multiple?: boolean;
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (newFiles: File[]) => {
    setFiles((prevFiles) => [...prevFiles, ...newFiles]);
    if (onChange) onChange(newFiles);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const { getRootProps, isDragActive } = useDropzone({
    multiple: multiple,
    noClick: true,
    onDrop: handleFileChange,
    accept: accept,
    onDropRejected: (error) => {
      console.log(error);
    },
  });

  return (
    <div className="w-full" {...getRootProps()}>
      <motion.div
        onClick={handleClick}
        whileHover="animate"
        className="group/file relative block w-full cursor-pointer overflow-hidden rounded-lg p-10"
      >
        <input
          ref={fileInputRef}
          id="file-upload-handle"
          type="file"
          multiple={multiple}
          accept={Object.entries(accept)
            .flatMap(([, exts]) => exts)
            .join(",")}
          onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
          className="hidden"
        />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>
        <div className="flex flex-col items-center justify-center">
          <p className="relative z-20 font-sans text-base font-bold">
            Télécharger le fichier
          </p>
          <p className="relative z-20 mt-2 font-sans text-base font-normal text-primary-foreground ">
            Glissez vos fichiers ici ou cliquez pour les télécharger
          </p>
          <div className="relative mx-auto mt-10 w-full max-w-xl">
            {files.length > 0 &&
              files.map((file, idx) => (
                <motion.div
                  key={"file" + idx}
                  layoutId={idx === 0 ? "file-upload" : "file-upload-" + idx}
                  className={cn(
                    "relative overflow-hidden z-40 bg-white dark:bg-neutral-900 flex flex-col items-start justify-start md:h-14 p-4 mt-4 w-full mx-auto rounded-md",
                    "shadow-sm"
                  )}
                >
                  <div className="flex w-full items-center justify-between gap-4">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      layout
                      className="max-w-xs truncate text-base text-neutral-700 dark:text-neutral-300"
                    >
                      {file.name}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      layout
                      className="w-fit shrink-0 rounded-lg px-2 py-1 text-sm text-neutral-600 shadow-input dark:bg-neutral-800 dark:text-white"
                    >
                      {(file.size / (1024 * 1024)).toFixed(2)} MB
                    </motion.p>
                  </div>

                  <div className="mt-2 flex w-full flex-col items-start justify-between text-sm text-neutral-600 dark:text-neutral-400 md:flex-row md:items-center">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      layout
                      className="rounded-md px-1 py-0.5 dark:bg-neutral-800 "
                    >
                      {file.type}
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      layout
                    >
                      modified{" "}
                      {new Date(file.lastModified).toLocaleDateString()}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            {!files.length && (
              <motion.div
                layoutId="file-upload"
                variants={mainVariant}
                transition={{
                  type: "spring",
                  stiffness: 20,
                  damping: 20,
                }}
                className={cn(
                  "relative z-40 bg-neutral-900 flex items-center justify-center h-52 mt-0 w-full max-w-[150rem] mx-auto rounded-md border border-dashed border-gray-400",
                  "shadow-[30px_30px_150px_rgba(0,0,0,0)]"
                )}
              >
                {isDragActive ? (
                  <motion.p
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center text-neutral-600"
                  >
                    Laissez tomber
                    <IconUpload className="size-4 text-neutral-600 dark:text-neutral-400" />
                  </motion.p>
                ) : (
                  <IconUpload className="size-4 text-neutral-300" />
                )}
              </motion.div>
            )}

            {!files.length && (
              <motion.div
                variants={secondaryVariant}
                className="absolute inset-0 z-30 mx-auto mt-0 flex h-52 w-full max-w-[150rem] items-center justify-center rounded-md border border-dashed border-sky-400 bg-transparent opacity-0"
              ></motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
