import { Column, Row } from 'assets/common';
import styled from 'styled-components';
import { Palette } from 'styles/Palette';
import Typo from 'styles/Typo';
import edit from 'assets/icons/edit.svg';
import deleteComment from 'assets/icons/delete-comment.svg';
import report from 'assets/icons/report.svg';

const CommentModal = ({
  setIsModalOpen,
}: {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const isAuthor: boolean = true;

  const handleEdit = () => {
    setIsModalOpen(false);
  };
  const handleDelete = () => {
    setIsModalOpen(false);
  };
  const handleReport = () => {
    alert('해당 댓글 신고를 원하시면 ****로 문의 바랍니다.');
  };

  return (
    <Container>
      <Modal>
        <Typo.b4>댓글</Typo.b4>
        {isAuthor ? (
          <Column gap={10}>
            <Menu onClick={handleEdit}>
              <img src={edit} />
              <Typo.s2>수정</Typo.s2>
            </Menu>
            <Menu onClick={handleDelete}>
              <img src={deleteComment} />
              <Typo.s2>삭제</Typo.s2>
            </Menu>
          </Column>
        ) : (
          <Menu onClick={handleReport}>
            <img src={report} />
            <Typo.s2>신고</Typo.s2>
          </Menu>
        )}
      </Modal>
    </Container>
  );
};

export default CommentModal;

const Container = styled(Column)`
  width: 100%;
  height: 100%;

  justify-content: flex-end;
  align-items: center;

  padding-bottom: 54px;

  background: rgba(0, 0, 0, 0.25);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  cursor: pointer;
`;
const Modal = styled(Column)`
  width: 330px;
  min-height: 77px;
  padding: 13px 20px 20px 20px;
  gap: 18px;

  border-radius: 15px;
  background: ${Palette.White};

  cursor: default;
`;
const Menu = styled(Row)`
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;
