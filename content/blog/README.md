# Blog Articles

Articles are stored as individual JSON files in this directory.

## Schema

Each JSON file follows this structure:

```json
{
  "slug": "your-article-slug",
  "title": "Article Title",
  "description": "Short description for cards and meta tags.",
  "author": "Author Name",
  "date": "2026-03-10",
  "readTime": "5 min read",
  "category": "Industry Insights",
  "tags": ["co2", "beverage-grade", "rng"],
  "heroImage": "/images/blog/your-image.jpg",
  "content": [
    { "type": "paragraph", "text": "Body text here." },
    { "type": "heading", "text": "Section Title", "level": 2 },
    { "type": "list", "items": ["Item one", "Item two"] },
    { "type": "quote", "text": "A notable quote." }
  ]
}
```

## Content Block Types

| Type | Fields | Notes |
|------|--------|-------|
| `paragraph` | `text` | Standard body paragraph. |
| `heading` | `text`, `level` | `level` is 2 or 3 (h2/h3). |
| `list` | `items` | Array of strings. Renders as a bulleted list. |
| `quote` | `text` | Block quote. |

## File Naming

Name the file to match the slug: `understanding-beverage-grade-co2.json`.
