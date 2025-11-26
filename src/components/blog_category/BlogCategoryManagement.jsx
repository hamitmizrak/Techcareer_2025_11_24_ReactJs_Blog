import React, { useEffect, useState } from 'react';

// ROUTER
import { Link, useNavigate } from 'react-router-dom';

// API LIST CALL
import BlogCategoryApiService from '../../services/BlogCategoryApiService';

// I18N
import { withTranslation } from 'react-i18next';

// FUNCTION
function BlogCategoryList({ props, t, i18n }) {
    // FIELD

    // ROUTER
    let navigate = useNavigate();

    // STATE
    //const [] = React.useState();
    const [blogCategoryApiListData, setBlogCategoryApiListData] = useState([]); //default boş dizi

    // EFFECT
    useEffect(() => {
        // Component Did Mount
        fetchBlogList();
    }, []);

    // FUNCTION

    // FETCH BLOG LIST ASENKRON
    const fetchBlogList = async () => {
        try {
            // ASENKRON API ÇAĞRI
            // const response = await fetch('http://localhost:4444/blog/category/api/v1/list');
            const response = await BlogCategoryApiService.objectApiList();

            if (response.status === 200) {
                setBlogCategoryApiListData(response.data);
                console.log(response);
                console.log(response.data);
                console.log(response.status);
                console.log(response.headers);
            }
        } catch (error) {
            console.error('Blog Category fetchBlogList: ', error);
        }
    }; // end fetchBlogList

    // After, delete, update, create (data giving)
    // LIST
    const listManipulationAfter = () => {
        BlogCategoryApiService.objectApiList()
            .then((response) => {
                if (response.status === 200) {
                    // CONSOLE
                    console.log(response);
                    console.log(response.data);
                    console.log(response.status);
                    console.log(response.headers);

                    // USESTATE
                    setBlogCategoryApiListData(response.data);
                }
            })
            .catch((error) => {
                console.error('Blog Category listManipulationAfter: ', error);
            });
    }; // end listManipulationAfter

    // UPDATE LOCAL-STORAGE(ID)
    const setUpdateBlogCategory = (data) => {
        let { id, categoryName } = data;
        localStorage.setItem('blog_category_update_id', id);
        localStorage.setItem('blog_category_category_name', categoryName);
    };

    // UPDATE LOCAL-STORAGE(ID)
    const setViewBlogCategory = (data) => {
        let { id } = data;
        localStorage.setItem('blog_category_view_id', id);
    };

    // DELETE
    const setDeleteBlogCategory = (id) => {
        if (window.confirm(id + ' nolu datayı silmek istiyor musunuz ?')) {
            BlogCategoryApiService.objectApiDelete(id)
                .then((response) => {
                    if (response.status === 200) {
                        listManipulationAfter();
                        navigate('blog/category/list');
                    }
                })
                .catch((error) => {
                    console.error('Blog Category Delete: ', error);
                    window.location = 'blog/category/list';
                });
        } else {
            alert(`${id} nolu data silinmedi. `);
            window.location = 'blog/category/list';
        }
    }; // end setDeleteBlogCategory

    // RETURN
    return (
        <React.Fragment>
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1 class="text-center display-5 mt-3 mb-5">{t('blog_category_list')}</h1>
            <Link className="btn btn-primary ms-2 me-4" to="/blog/category/api/v1/create">
                {t('create')}
            </Link>

            <div className="table-responsive">
                <table className="table table-primary table-striped table-responsive mb-4">
                    <thead>
                    <tr>
                        <th scope="col">{t('id')}</th>
                        <th scope="col">{t('blog_category_name')}</th>
                        <th scope="col">{t('date')}</th>
                        <th scope="col">{t('update')}</th>
                        <th scope="col">{t('show')}</th>
                        <th scope="col">{t('delete')}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {blogCategoryApiListData.map((data) => (
                        <tr key={data.categoryId}>
                            <td>{data.categoryId}</td>
                            <td>{data.categoryName}</td>
                            <td>{data.systemCreatedDate}</td>

                            <td>
                                <Link to={`/blog/category/api/v1/update/${data.categoryId}`}>
                                    <i
                                        onClick={() => {
                                            setUpdateBlogCategory(data);
                                        }}
                                        className="fa-solid fa-wrench text-primary"
                                    ></i>
                                </Link>
                            </td>

                            <td>
                                <Link to={`/blog/category/api/v1/find/${data.categoryId}`}>
                                    <i
                                        onClick={() => {
                                            setViewBlogCategory(data.categoryId);
                                        }}
                                        className="fa-solid fa-eye text-success"
                                    ></i>
                                </Link>
                            </td>

                            <td>
                                <Link to={`/blog/category/api/v1/list`}>
                                    <i
                                        onClick={() => {
                                            setDeleteBlogCategory(data.categoryId);
                                        }}
                                        class="fa-solid fa-trash-can text-danger"
                                    ></i>
                                </Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </React.Fragment>
    ); // end return
} // end function

// HOC
export default withTranslation()(BlogCategoryList);
