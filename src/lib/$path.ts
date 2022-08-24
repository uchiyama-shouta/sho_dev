export const pagesPath = {
  "posts": {
    _id: (id: string | number) => ({
      $url: (url?: { hash?: string }) => ({ pathname: '/posts/[id]' as const, query: { id }, hash: url?.hash })
    })
  },
  "product": {
    $url: (url?: { hash?: string }) => ({ pathname: '/product' as const, hash: url?.hash })
  },
  "profile": {
    $url: (url?: { hash?: string }) => ({ pathname: '/profile' as const, hash: url?.hash })
  },
  $url: (url?: { hash?: string }) => ({ pathname: '/' as const, hash: url?.hash })
}

export type PagesPath = typeof pagesPath
