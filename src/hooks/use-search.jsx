import { useState } from "react"
import { useArticles } from "./use-articals";

export const SearchPanel = () => {
    const { articles } = useArticles();
    const [search, setSearch] = useState("")
    const filterItems = articles.filter(article => {
        return article.title.toLowerCase().includes(search.toLowerCase())
    });

    return { search, setSearch }
}
