import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div>일정 관리</div>
      <div>{children}</div>
    </div>
  );
};

export default TodoTemplate;
