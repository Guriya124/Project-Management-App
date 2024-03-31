import { forwardRef, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';

const Model = forwardRef(function Model({ children }, ref) {
    useImperativeHandle(ref, () => {
        return {
            open() { },

        };
    });


    return createPortal(
        <dialog>
            {children}
        
        </dialog>,
        document.getElementById('modal-root'));
});

export default Model;
