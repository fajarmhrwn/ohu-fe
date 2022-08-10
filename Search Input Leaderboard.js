import { useState } from 'react';
 import { FormControl, Input, IconButton } from '@chakra-ui/react';
 import { FaSearch } from 'react-icons/fa';

 const Search = () => {
   const [keyword, setKeyword] = useState('');

   const submitHandler = event => {
     event.preventDefault()
     console.log(keyword);
   };

   return (
     <form onSubmit={submitHandler}>
       <FormControl
         id="keyword"
         w={{ base: 225, md: 400, lg: 500 }}
         display="flex"
         isRequired
       >
         <Input
           type="text"
           placeholder="Search ..."
           value={keyword}
           onChange={event => setKeyword(event.target.value)}
         />
         <IconButton
           ml={2}
           icon={<FaSearch />}
           type="submit"
           aria-label="Search button"
         />
       </FormControl>
     </form>
   );
 };

 export default Search;