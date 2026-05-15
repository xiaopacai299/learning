/**
 * 泛型练习：ApiResponse<T>
 * 对应 materials/a.md「## 3. 泛型」：占位符 T，使用时再代入具体类型。
 * 检查：在 练功房 目录执行 npm run typecheck
 */

// --- 题 1：补全下面类型，使 data 的类型随 T 变化，error 始终可选字符串 ---
// type ApiResponse<T> = ...
type ApiResponse<T> = {
  data: T;
  error?: string;
};

// --- 题 2：用 ApiResponse<User> 声明变量 r，不写类型断言时，r.data 应能点出 id / name ---
interface User {
  id: number;
  name: string;
}

const r: ApiResponse<User> = { data: { id: 1, name: "a" } };
void r.data.id;

// --- 题 3（进阶）：实现 unwrap，成功时返回 data；若 error 有值则抛 Error(error) ---
function unwrap<T>(r: ApiResponse<T>): T {
  if (r.error) {
    throw new Error(r.error);
  }
  return r.data;
}

export {};
