import React, { useState } from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import Slide from "@mui/material/Slide";
import Paper from "@mui/material/Paper";
import Draggable from "react-draggable";

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const ProjectCard = ({
  images,
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setCurrentImageIndex(0); // Reset current image index when closing popup
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Button
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            onClick={openPopup}
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Button>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818]py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
      {/* Popup Dialog */}
      <Dialog
        open={isPopupOpen}
        TransitionComponent={Transition}
        PaperComponent={PaperComponent}
        keepMounted
        onClose={closePopup}
        aria-describedby="draggable-dialog-title"
      >
        <DialogTitle
          style={{
            cursor: "move",
            textAlign: "center",
            fontFamily: "inherit",
            fontWeight: "bold",
          }}
          className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-600"
          id="draggable-dialog-title"
        >
          Draggable Dialog
        </DialogTitle>
        <DialogContent>
          <img
            src={images[currentImageIndex]}
            alt={`Project ${currentImageIndex + 1}`}
            className="w-full"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={goToPreviousImage}>Previous</Button>
          <Button onClick={goToNextImage}>Next</Button>
          <Button onClick={closePopup}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProjectCard;
