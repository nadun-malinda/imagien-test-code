import PlusOneIcon from "@mui/icons-material/PlusOne";
import AddIcon from "@mui/icons-material/Add";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import PlaylistAddCheckOutlinedIcon from "@mui/icons-material/PlaylistAddCheckOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import PlaylistPlayOutlinedIcon from "@mui/icons-material/PlaylistPlayOutlined";

export type Icon =
  | "delete"
  | "add"
  | "playListAdd"
  | "playListPlay"
  | "playListAddCheck"
  | "arrowForward"
  | "edit"
  | "back";

export function getIcon(icon: Icon) {
  switch (icon) {
    case "delete":
      return <DeleteOutlineOutlinedIcon />;

    case "add":
      return <AddIcon />;

    case "playListAdd":
      return <PlaylistAddIcon />;

    case "playListPlay":
      return <PlaylistPlayOutlinedIcon />;

    case "playListAddCheck":
      return <PlaylistAddCheckOutlinedIcon />;

    case "arrowForward":
      return <ArrowForwardOutlinedIcon />;

    case "edit":
      return <EditOutlinedIcon />;

    case "back":
      return <ArrowBackIosIcon />;

    default:
      return <PlusOneIcon />;
  }
}
