import { useParams, Route } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QUOTES = [
  { id: '1', author: "Max 1", text: "Learning 1" },
  { id: '2', author: "Max 2", text: "Learning 2" },
  { id: '3', author: "Max 3", text: "Learning 3" },
  { id: '4', author: "Max 4", text: "Learning 4" },
  { id: '5', author: "Max 5", text: "Learning 5" },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if(!quote){
    return <p>No quote find</p>
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};
export default QuoteDetail;
