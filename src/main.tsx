import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import store from './redux/store/index'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './pages/Root.tsx'
import Blog from './pages/Blog.tsx'
import Projects from './pages/Projects.tsx'
import About from './pages/About.tsx'
import Newsletter from './pages/Newsletter.tsx'
import Home from './pages/Home.tsx'
import BlogDetail from './components/BlogDetail.tsx'

const routers = createBrowserRouter([
{
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Home /> },
      { path: "blog", element: <Blog /> , 
        children: [
          {path: "detail/:id" , element: <BlogDetail/> } 
        ] 
      },
      { path: "projects", element: <Projects /> },
      { path: "about", element: <About /> },
      { path: "newsletter", element: <Newsletter /> },
    ],
  },
]
)
createRoot(document.getElementById('root')!).render(
  <StrictMode>
   <Provider store={store}>
    <RouterProvider router={routers} />
    </Provider>
  </StrictMode>,
)
