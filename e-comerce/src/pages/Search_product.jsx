import {useParams} from 'react-router'
import Products from '../components/Products'
import {items} from '../context/Data'

const Search_product = () => {
  const {terms} = useParams();
  const searchResults = items.filter(item => 
    item.title.toLowerCase().includes(terms.toLowerCase()) ||
    item.description.toLowerCase().includes(terms.toLowerCase())
  );
  return (
    <>
      <Products items={searchResults} />
    </>
  )
}

export default Search_product
