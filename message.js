const message, setMessage = useState([]);

const newPost = {
    id: 3,
    title: 'Hello, again, world!',
    content: 'This is another blog post.',
}; // The new blog post filled in the form/page

axios.post('/api/posts', newPost).then(response => {
    setMessage(`User ${response.data.user.id} has been successfully added`);
});
