import AdminNav from "../components/AdminNav";
import Button from "../components/Button";
import Layout from "../components/Layout";
import Modal from "../components/Modal";
import { useState } from "react";

const initialRooms = [
  { id: 1, name: "스탠다드룸", price: 120000, season: "비수기" },
  { id: 2, name: "디럭스룸", price: 180000, season: "성수기" },
  { id: 3, name: "스위트룸", price: 300000, season: "성수기" },
];

export default function RoomAdmin() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: '', price: '', season: '' });
  const [search, setSearch] = useState('');
  const [rooms] = useState(initialRooms);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 실제 저장 로직은 추후 구현
    setOpen(false);
    setForm({ name: '', price: '', season: '' });
    // 알림 등 추가 가능
  };

  // 검색 필터링
  const filteredRooms = rooms.filter((r) => r.name.includes(search));

  return (
    <Layout>
      <AdminNav />
      <div className="p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8">객실/요금/시즌/블랙아웃 관리</h2>
        <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <input
            type="text"
            placeholder="객실명 검색..."
            className="border rounded px-3 py-2 w-full md:w-60"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <Button className="bg-blue-600 text-white hover:bg-blue-700" onClick={() => setOpen(true)}>객실 추가</Button>
        </div>
        <table className="w-full bg-white rounded shadow text-sm">
          <thead>
            <tr className="border-b">
              <th className="py-2 cursor-pointer">객실명</th>
              <th>요금</th>
              <th>시즌</th>
              <th>관리</th>
            </tr>
          </thead>
          <tbody>
            {filteredRooms.map((r) => (
              <tr key={r.id} className="border-b last:border-0">
                <td className="py-2">{r.name}</td>
                <td>₩{r.price.toLocaleString()}</td>
                <td>{r.season}</td>
                <td>
                  <Button className="text-xs bg-gray-200 mr-2">수정</Button>
                  <Button className="text-xs bg-red-200">삭제</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-8">
          <div className="font-bold mb-2">블랙아웃(재고막기) 관리</div>
          <table className="w-full bg-white rounded shadow text-sm">
            <thead>
              <tr className="border-b">
                <th className="py-2">날짜</th>
                <th>객실</th>
                <th>사유</th>
                <th>관리</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">2025-09-10</td>
                <td>스위트룸</td>
                <td>정기점검</td>
                <td><Button className="text-xs bg-red-200">해제</Button></td>
              </tr>
            </tbody>
          </table>
        </div>
        <Modal open={open} onClose={() => setOpen(false)} title="객실 추가">
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="block mb-1 font-medium">객실명</label>
              <input name="name" value={form.name} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
            </div>
            <div>
              <label className="block mb-1 font-medium">요금</label>
              <input name="price" type="number" value={form.price} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
            </div>
            <div>
              <label className="block mb-1 font-medium">시즌</label>
              <input name="season" value={form.season} onChange={handleChange} className="w-full border rounded px-3 py-2" required />
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <Button type="button" className="bg-gray-200 text-gray-700" onClick={() => setOpen(false)}>취소</Button>
              <Button type="submit" className="bg-blue-600 text-white">저장</Button>
            </div>
          </form>
        </Modal>
      </div>
    </Layout>
  );
}
