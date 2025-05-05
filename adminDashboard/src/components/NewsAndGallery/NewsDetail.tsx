import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";

interface NewsItem {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  content?: string;
}

function NewsDetail() {
  const { id } = useParams();
  const [news, setNews] = useState<NewsItem | null>(null);
  const [isStacked, setIsStacked] = useState(false);

  const imageRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch(`https://level-up-talent-detection.onrender.com/api/news/${id}`)
      .then(res => res.json())
      .then(data => setNews(data))
      .catch(err => console.error(err));
  }, [id]);

  useEffect(() => {
    const checkHeights = () => {
      if (imageRef.current && textRef.current) {
        const imageHeight = imageRef.current.clientHeight;
        const textHeight = textRef.current.clientHeight;
        setIsStacked(textHeight > imageHeight);
      }
    };

    const timeout = setTimeout(checkHeights, 100);
    window.addEventListener("resize", checkHeights);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", checkHeights);
    };
  }, [news]);

  if (!news) {
    return <div className="p-5">Loading...</div>;
  }

  return (
    <div className="p-5">
      <div className={`flex gap-4 ${isStacked ? "flex-col" : "flex-row"}`}>
        <div className={`${isStacked ? "w-full" : "w-1/2"}`}>
          <img
            ref={imageRef}
            src={`${news.imageUrl}`}
            alt={news.title}
            className="w-full h-auto mb-4"
          />
        </div>
        <div
          ref={textRef}
          className={`${isStacked ? "w-full" : "w-1/2"}`}
        >
          <h1 className="text-3xl font-bold mb-2">{news.title}</h1>
          <p className="text-gray-700 whitespace-pre-line">{news.content || news.description}</p>
        </div>
      </div>
    </div>
  );
}

export default NewsDetail;
