import React from 'react';
import { useAnimeContext } from '../hooks/anime-context'; 
import GridComponent from '../components/grid';  

const UserList: React.FC = () => {
  const { userList, removeAnime } = useAnimeContext(); 

  const handleRemoveAnime = (animeId: number) => {
    removeAnime(animeId);
  };

  return (
    <div>
      <h1>Your Saved Anime List</h1>
      {userList.length === 0 ? (
        <p>You don't have any saved anime.</p>
      ) : (
        <GridComponent
          animes={userList}
          onRemoveAnime={handleRemoveAnime}  
        />
      )}
    </div>
  );
};

export default UserList;
