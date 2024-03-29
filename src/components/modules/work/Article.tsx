'use client';

import type * as i from 'types';
import { useEffect, useState } from 'react';
import rangeParser from 'parse-numeric-range';
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import bash from 'react-syntax-highlighter/dist/cjs/languages/prism/bash';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';
import json from 'react-syntax-highlighter/dist/cjs/languages/prism/json';
import markdown from 'react-syntax-highlighter/dist/cjs/languages/prism/markdown';
import scss from 'react-syntax-highlighter/dist/cjs/languages/prism/scss';
import tsx from 'react-syntax-highlighter/dist/cjs/languages/prism/tsx';
import typescript from 'react-syntax-highlighter/dist/cjs/languages/prism/typescript';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import rehypeExternalLinks from 'rehype-external-links';
import remarkGfm from 'remark-gfm';

import { useUiStore } from 'store/ui';

SyntaxHighlighter.registerLanguage('tsx', tsx);
SyntaxHighlighter.registerLanguage('typescript', typescript);
SyntaxHighlighter.registerLanguage('css', css);
SyntaxHighlighter.registerLanguage('scss', scss);
SyntaxHighlighter.registerLanguage('bash', bash);
SyntaxHighlighter.registerLanguage('markdown', markdown);
SyntaxHighlighter.registerLanguage('json', json);

export function Article({ post }: ArticleProps) {
  const { theme } = useUiStore();
  const [syntaxTheme, setSyntaxTheme] = useState(oneLight);

  useEffect(() => {
    const localTheme = theme === 'dark' ? oneDark : oneLight;
    setSyntaxTheme(localTheme);
  }, [theme]);

  const MarkdownComponents: object = {
    code({ node, inline, className, ...props }) {
      const hasLang = /language-(\w+)/.exec(className || '');
      const hasMeta = node?.data?.meta;

      const applyHighlights: object = (applyHighlights: number) => {
        if (hasMeta) {
          const RE = /{([\d,-]+)}/;
          const metadata = node.data.meta?.replace(/\s/g, '');
          const strlineNumbers = RE?.exec(metadata)?.[1] || '0';
          const highlightLines = rangeParser(strlineNumbers);
          const highlight = highlightLines;
          const data: string | null = highlight.includes(applyHighlights) ? 'highlight' : null;
          return { data };
        } else {
          return {};
        }
      };

      return hasLang ? (
        <SyntaxHighlighter
          style={syntaxTheme}
          language={hasLang[1]}
          showLineNumbers={true}
          wrapLines={hasMeta}
          useInlineStyles={true}
          lineProps={applyHighlights}
        >
          {props.children}
        </SyntaxHighlighter>
      ) : (
        <code
          className={className}
          {...props}
        />
      );
    },
  };

  return (
    <ReactMarkdown
      components={MarkdownComponents}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[[rehypeExternalLinks, { target: '_blank' }]]}
      className="markdown font-sathosi"
    >
      {post.content}
    </ReactMarkdown>
  );
}

type ArticleProps = {
  post: i.Post;
};
