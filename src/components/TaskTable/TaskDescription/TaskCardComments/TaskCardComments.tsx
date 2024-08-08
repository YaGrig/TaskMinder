import React, { useCallback, useMemo, useState } from "react";
import { IconButton, List, ListItem, ListItemText } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styles from "../TaskDescription.module.scss";
import {
  useCreateCommentMutation,
  useDeleteCommentMutation,
  useUpdateCommentMutation,
} from "@/apollo/generated-hooks";
import { Button } from "@/components/dnd/Button/Button";
import { useModalState } from "@/api/hooks/use-modal-state";
import WUIMenu, { MENU_ITEM } from "@/components/header/actions/WUIMenu";
import WUIMenuItem from "@/components/header/actions/WUIMenuItem/WUIMenuItem";
import { WUIInput } from "@/components/Input/WUIInput";
import { useTranslation } from "react-i18next";
import { useSnackbar } from "notistack";

interface Comment {
  id: string;
  content: string;
  user: {
    firstname: string;
  };
}

interface TaskCardCommentsProps {
  comments: Comment[] ;
  taskId: string;
  refetch: () => void;
}

const TaskCardComments: React.FC<TaskCardCommentsProps> = ({
  comments,
  taskId,
  refetch,
}) => {
  const { t } = useTranslation();
  const [newComment, setNewComment] = useState<string>("");
  const [createComment] = useCreateCommentMutation();
  const menu = useModalState();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [activeComment, setActiveComment] = useState<Comment | null>(null);
  const [updateComment] = useUpdateCommentMutation();
  const [deleteComment] = useDeleteCommentMutation();
  const [editMode, setEditMode] = useState<boolean>(false);
  const [editableComment, setEditableComment] = useState<Comment | null>(null);
  const [editableCommentContent, setEditableCommentContent] =
    useState<string>("");
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteComment = useCallback(() => {
    menu.close();
    if (!activeComment?.id) return;

    deleteComment({
      variables: {
        id: activeComment.id,
      },
    }).then(() => {
      enqueueSnackbar("success delete", { variant: "success" });
      refetch();
    });
  }, [activeComment, deleteComment, enqueueSnackbar, menu, refetch]);

  const handleEditComment = useCallback(
    (comment: Comment) => {
      menu.close();
      setEditMode(true);
      setEditableComment(comment);
      setEditableCommentContent(comment.content);
    },
    [menu]
  );

  const handleUpdateComment = useCallback(() => {
    if (!editableCommentContent) {
      console.error("Comment content is null or undefined.");
      return;
    }
    if (!editableComment?.id) {
      console.error("Comment ID is null or undefined");
      return;
    }
    updateComment({
      variables: {
        id: editableComment.id,
        commentInput: { content: editableCommentContent },
      },
    }).then(() => {
      setEditMode(false);
      enqueueSnackbar("success edit", { variant: "success" });
      refetch();
    });
  }, [
    editableComment,
    editableCommentContent,
    enqueueSnackbar,
    refetch,
    updateComment,
  ]);

  const handleAddComment = useCallback(() => {
    if (!newComment) {
      console.error("newComment is null or undefined.");
      return;
    }
    createComment({
      variables: {
        taskId: taskId.toString(),
        comment: { content: newComment },
      },
    }).then(() => {
      setNewComment("");
      refetch();
    });
  }, [createComment, newComment, taskId, refetch]);

  const handleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
    const commentId = e.currentTarget.dataset.id;
    const commentToEdit = comments?.find((comment) => comment.id === commentId);
    setActiveComment(commentToEdit || null);
    menu.open();
  };

  const menuItems = useMemo(
    () => [
      {
        label: t("taskDetailsComment.edit"),
        onClick: () => {
          if (activeComment) {
            handleEditComment(activeComment);
          }
        },
      },
      {
        label: t("taskDetailsComment.delete"),
        onClick: () => {
          if (activeComment) {
            handleDeleteComment();
          }
        },
      },
    ],
    [activeComment, t, handleEditComment, handleDeleteComment]
  );

  return (
    <div className={styles.comments}>
      {comments?.length !== 0 && (
        <List className={styles.commentsList}>
          {comments?.map((comment) => (
            <ListItem key={comment.id} className={styles.commentItem}>
              {editMode && editableComment?.id === comment.id ? (
                <>
                  <WUIInput
                    label={t("taskDetailsComment.addComment")}
                    value={editableCommentContent}
                    onChange={(e) =>
                      setEditableCommentContent(e.target.value as string)
                    }
                    className={styles.commentInput}
                  />

                  <Button onClick={handleUpdateComment}>
                    {t("taskDetailsComment.save")}
                  </Button>
                </>
              ) : (
                <ListItemText
                  primary={comment.content}
                  secondary={`- ${comment?.user.firstname}`}
                  className={styles.commentText}
                />
              )}
              {!editMode && (
                <IconButton
                  edge="end"
                  aria-label="more"
                  className={styles.commentMenuButton}
                  data-id={comment.id}
                  onClick={(e) => handleMenu(e)}
                >
                  <MoreVertIcon />
                </IconButton>
              )}
            </ListItem>
          ))}
        </List>
      )}
      <WUIInput
        label={t("taskDetailsComment.addComment")}
        value={newComment}
        onChange={(e) => setNewComment(e.target.value as string)}
        className={styles.commentInput}
      />
      <Button onClick={handleAddComment}>
        {t("taskDetailsComment.addCommentButton")}
      </Button>
      {menu.opened && (
        <WUIMenu anchorEl={anchorEl} location={"left"} onClose={menu.close}>
          {menuItems.map((item) => (
            <WUIMenuItem
              title={item.label}
              key={item.label}
              onClick={item.onClick}
              className={MENU_ITEM}
            />
          ))}
        </WUIMenu>
      )}
    </div>
  );
};

export default TaskCardComments;
