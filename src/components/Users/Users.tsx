import { NavLink } from "react-router-dom";
import { ItemType, StatusFollowingType } from "../../api/api-social";
import { initialItemType } from "../../redax/users-reducer";


export type UsersAdditionPropsType = {
  totalCount: number;
  pageSize: number;
  pageFocus: number;
  onPageChanged: (page: number) => void;
  users: initialItemType;
  changeFollow: (id: number) => void;

};

export const Users = (props: UsersAdditionPropsType) => {
  const pageNumbers = Math.ceil(props.totalCount / props.pageSize / 1000);

  const pagesArray = [];
  for (let i = 1; i <= pageNumbers; i++) {
    pagesArray.push(i);
  }

  

  return (
    <>
      <div>
        {pagesArray.map((el) => (
          <span
            key={el}
            style={el === props.pageFocus ? { fontWeight: 800 } : {}}
            onClick={() => props.onPageChanged(el)}
          >
            {el}
          </span>
        ))}
      </div>
      {props.users.map((el) => {
        
        
        return (
          <div
            key={el.id}
            style={{
              
              alignItems: "center",
            }}
          >
            <div>
              <NavLink onClick={() => console.log('123')
              } to={`Profile/${el.id}`}>
                <img src='https://placehold.co/100x100' alt="" />
              </NavLink>
             
            </div>
            <div>
              <div>{el.name}</div>
              <button disabled={el.statusFollowingUser === 'loading'} onClick={() => props.changeFollow(el.id)}>
                {el.followed ? "UnFollow" : "Follow"}
              </button>
              <div>{""}</div>
            </div>

            <div>
              <div>{""}</div>
              <div>{""}</div>
            </div>

            <span>{}</span>
          </div>
        );
      })}
    </>
  );
};
