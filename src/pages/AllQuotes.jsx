import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: 1, author: "Max 1", text: "Learning 1" },
  { id: 2, author: "Max 2", text: "Learning 2" },
  { id: 3, author: "Max 3", text: "Learning 3" },
  { id: 4, author: "Max 4", text: "Learning 4" },
  { id: 5, author: "Max 5", text: "Learning 5" },
];

const AllQuotes = () => {
    
  return <QuoteList quotes={DUMMY_QUOTES}/>;
};
export default AllQuotes;
