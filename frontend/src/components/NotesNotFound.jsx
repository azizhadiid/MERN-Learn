import { NotebookIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotesNotFound = () => {
    return (
        <div className="min-h-[50vh] flex flex-col items-center justify-center text-center text-white mt-16">
            <div className="bg-[#00FF9D1A] p-6 rounded-full mb-6">
                <NotebookIcon className="w-12 h-12 text-[#00FF9D]" />
            </div>
            <h2 className="text-2xl font-semibold mb-2">No notes yet</h2>
            <p className="text-base-content/70 mb-6">
                Ready to organize your thoughts? Create your first note to get started on your journey.
            </p>
            <Link to="/create" className="bg-[#00FF9D] hover:bg-[#00e68c] text-black font-medium px-6 py-2 rounded-full transition">
                Create Your First Note
            </Link>
        </div>
    );
};

export default NotesNotFound;
