import React, { useEffect, useState } from "react";

import usePagination from "@mui/material/usePagination";
import { Stack, Typography } from "@mui/material";

import InputMini from "components/base/InputMini";
import ButtonMini from "components/base/ButtonMini";

const Pagination = ({ count, page, onSubmit, disabled, ...props }) => {
  const [pageInput, setPageInput] = useState(1);

  const { items } = usePagination({
    count,
    page,
    ...props,
  });

  useEffect(() => {
    setPageInput(page);
  }, [page]);

  return (
    <Stack
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      {items.map(({ type, selected, ...item }, index) => {
        if (index === 1)
          return (
            <Stack direction="row" spacing={1} key={index}>
              <Typography variant="body2" display="block">
                Page
              </Typography>
              <InputMini
                type="number"
                name="page"
                sx={{ width: 50 }}
                value={pageInput}
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  setPageInput(value);
                }}
                onKeyPress={(e) => {
                  const value = parseInt(e.target.value);
                  if (e.key === "Enter" && 0 < value && value <= count)
                    onSubmit(pageInput);
                }}
                disabled={disabled}
              />
              <Typography variant="body2" display="block">
                of {count}
              </Typography>
            </Stack>
          );
        if (type === "previous" || type === "next")
          return (
            <ButtonMini
              variant="contained"
              {...item}
              key={index}
              disabled={disabled || item.disabled}
            >
              {type}
            </ButtonMini>
          );
        return null;
      })}
    </Stack>
  );
};

export default Pagination;

// export default function UsePagination() {

//   return (
//     <nav>
//       <List>
//         {items.map(({ page, type, selected, ...item }, index) => {
//           let children = null;

//           if (type === 'start-ellipsis' || type === 'end-ellipsis') {
//             children = '…';
//           } else if (type === 'page') {
//             children = (
//               <button
//                 type="button"
//                 style={{
//                   fontWeight: selected ? 'bold' : undefined,
//                 }}
//                 {...item}
//               >
//                 {page}
//               </button>
//             );
//           } else {
//             children = (
//               <button type="button" {...item}>
//                 {type}
//               </button>
//             );
//           }

//           return <li key={index}>{children}</li>;
//         })}
//       </List>
//     </nav>
//   );
// }
