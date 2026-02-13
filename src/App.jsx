// import React, { useState } from 'react';

// function App() {
//   // 1. 사용자 기본 설정 (노아의 시급)
//   const [hourlyRate, setHourlyRate] = useState(15000); 

//   // 2. 비교 대상 옵션 설정
//   const [optionA, setOptionA] = useState({ name: '배달(빠름)', price: 18000, time: 15 });
//   const [optionB, setOptionB] = useState({ name: '포장(저렴)', price: 12000, time: 45 });

//   // 3. 핵심 로직: 1분당 가치 및 실질 비용 계산
//   const minuteValue = hourlyRate / 60;
//   const totalCostA = optionA.price + (optionA.time * minuteValue);
//   const totalCostB = optionB.price + (optionB.time * minuteValue);

//   const difference = Math.abs(totalCostA - totalCostB);
//   const isAIsBetter = totalCostA < totalCostB;
//   const bestOption = isAIsBetter ? optionA : optionB;

//   return (
//     <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
//       <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 border border-white/20 backdrop-blur-sm">
//         <header className="mb-8">
//           <h1 className="text-2xl font-black text-slate-900 tracking-tight mb-1">
//             노아의 '시간 가치' 계산기 ⏱️
//           </h1>
//           <p className="text-slate-500 text-sm font-medium">합리적 의사결정을 위한 기회비용 분석</p>
//         </header>

//         {/* 시급 입력 섹션 */}
//         <div className="mb-8 p-5 bg-blue-600 rounded-2xl shadow-lg shadow-blue-200">
//           <label className="block text-xs font-bold text-blue-100 uppercase tracking-wider mb-2">나의 예상 시급 (KRW)</label>
//           <div className="flex items-center text-white">
//             <span className="text-2xl font-light mr-1">₩</span>
//             <input 
//               type="number" 
//               value={hourlyRate} 
//               onChange={(e) => setHourlyRate(Math.max(0, Number(e.target.value)))}
//               className="bg-transparent text-3xl font-black focus:outline-none w-full"
//             />
//           </div>
//         </div>

//         {/* 입력 필드 (A/B 옵션) */}
//         <div className="space-y-4 mb-8">
//           {[ 
//             { label: '옵션 A (편의 중심)', data: optionA, setter: setOptionA, color: 'border-amber-200 bg-amber-50' },
//             { label: '옵션 B (절약 중심)', data: optionB, setter: setOptionB, color: 'border-emerald-200 bg-emerald-50' }
//           ].map((item, idx) => (
//             <div key={idx} className={`p-4 border-2 rounded-2xl ${item.color} transition-all`}>
//               <input 
//                 className="font-bold text-slate-700 bg-transparent mb-3 w-full focus:outline-none"
//                 value={item.data.name}
//                 onChange={(e) => item.setter({...item.data, name: e.target.value})}
//               />
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label className="text-[10px] font-bold text-slate-400 uppercase">가격(원)</label>
//                   <input type="number" value={item.data.price} onChange={(e) => item.setter({...item.data, price: Number(e.target.value)})} className="w-full font-semibold text-slate-700 bg-transparent focus:outline-none" />
//                 </div>
//                 <div>
//                   <label className="text-[10px] font-bold text-slate-400 uppercase">소요시간(분)</label>
//                   <input type="number" value={item.data.time} onChange={(e) => item.setter({...item.data, time: Number(e.target.value)})} className="w-full font-semibold text-slate-700 bg-transparent focus:outline-none" />
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* 결과 섹션 */}
//         <div className="bg-slate-900 rounded-2xl p-6 text-center shadow-xl">
//           <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mb-3">AI 분석 결과</p>
//           <div className="mb-4">
//             <span className="text-slate-300">노아님에게는 </span>
//             <span className="text-yellow-400 text-xl font-black underline decoration-2 underline-offset-4">{bestOption.name}</span>
//             <span className="text-slate-300">이 유리합니다!</span>
//           </div>
//           <div className="py-3 px-4 bg-white/10 rounded-xl inline-block">
//             <span className="text-white font-medium text-sm">
//               기회비용 포함 시 약 <span className="text-green-400 font-bold">{Math.round(difference).toLocaleString()}원</span> 이득
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


// 2차 개선안

// import React, { useState } from 'react';

// function App() {
//   const [hourlyRate, setHourlyRate] = useState(16000); 
//   const [optionA, setOptionA] = useState({ name: '배달(빠름)', price: 18000, time: 22 });
//   const [optionB, setOptionB] = useState({ name: '포장(저렴)', price: 12000, time: 45 });

//   // 1. 계산 로직
//   const minuteValue = hourlyRate / 60;
  
//   const timeCostA = optionA.time * minuteValue;
//   const totalCostA = optionA.price + timeCostA;

//   const timeCostB = optionB.time * minuteValue;
//   const totalCostB = optionB.price + timeCostB;

//   const difference = Math.abs(totalCostA - totalCostB);
//   const isAIsBetter = totalCostA < totalCostB;
//   const bestOption = isAIsBetter ? optionA : optionB;

//   // 2. 그래프 시각화를 위한 최대값 계산 (비율 산정용)
//   const maxCost = Math.max(totalCostA, totalCostB, 1); 

//   return (
//     <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 font-sans">
//       <div className="w-full max-w-lg bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
        
//         {/* 헤더 */}
//         <div className="bg-slate-900 p-6 text-white">
//           <h1 className="text-2xl font-bold mb-1">노아의 기회비용 계산기 📊</h1>
//           <p className="text-slate-400 text-sm">시간 가치를 포함한 진짜 비용 비교</p>
//         </div>

//         <div className="p-6 space-y-6">
//           {/* 시급 입력 */}
//           <div className="bg-blue-50 p-4 rounded-2xl border border-blue-100">
//             <label className="text-xs font-bold text-blue-600 uppercase">내 시간의 가치 (시급)</label>
//             <div className="flex items-center mt-1">
//               <span className="text-2xl font-bold text-blue-900 mr-2">₩</span>
//               <input 
//                 type="number" 
//                 value={hourlyRate} 
//                 onChange={(e) => setHourlyRate(Number(e.target.value))}
//                 className="bg-transparent text-3xl font-black text-blue-900 w-full focus:outline-none"
//               />
//             </div>
//             <p className="text-xs text-blue-400 mt-1">1분당 가치: {Math.round(minuteValue).toLocaleString()}원</p>
//           </div>

//           {/* 입력 필드 A/B */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {[ 
//               { label: 'A. 편의형', data: optionA, setter: setOptionA },
//               { label: 'B. 절약형', data: optionB, setter: setOptionB }
//             ].map((item, idx) => (
//               <div key={idx} className="p-4 border rounded-xl bg-slate-50 hover:bg-white transition-colors">
//                 <input 
//                   className="font-bold text-slate-700 bg-transparent mb-2 w-full focus:outline-none text-lg"
//                   value={item.data.name}
//                   onChange={(e) => item.setter({...item.data, name: e.target.value})}
//                 />
//                 <div className="space-y-2">
//                   <div>
//                     <label className="text-[10px] text-slate-400 font-bold uppercase">지출 금액(원)</label>
//                     <input type="number" value={item.data.price} onChange={(e) => item.setter({...item.data, price: Number(e.target.value)})} className="w-full font-medium bg-transparent border-b border-slate-200 focus:border-blue-500 outline-none" />
//                   </div>
//                   <div>
//                     <label className="text-[10px] text-slate-400 font-bold uppercase">소요 시간(분)</label>
//                     <input type="number" value={item.data.time} onChange={(e) => item.setter({...item.data, time: Number(e.target.value)})} className="w-full font-medium bg-transparent border-b border-slate-200 focus:border-blue-500 outline-none" />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* 📊 핵심 기능: 시각화 차트 섹션 */}
//           <div className="mt-8 pt-6 border-t border-slate-100">
//             <h3 className="text-sm font-bold text-slate-500 mb-4 uppercase tracking-wider">비용 구조 분석</h3>
            
//             {/* 옵션 A 그래프 */}
//             <div className="mb-4">
//               <div className="flex justify-between text-xs mb-1">
//                 <span className="font-bold text-slate-700">{optionA.name}</span>
//                 <span className="text-slate-500">{Math.round(totalCostA).toLocaleString()}원</span>
//               </div>
//               <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden flex">
//                 <div style={{ width: `${(optionA.price / maxCost) * 100}%` }} className="h-full bg-blue-400"></div>
//                 <div style={{ width: `${(timeCostA / maxCost) * 100}%` }} className="h-full bg-red-400"></div>
//               </div>
//               <div className="flex justify-between text-[10px] text-slate-400 mt-1">
//                 <span>지출: {optionA.price.toLocaleString()}</span>
//                 <span className="text-red-400">시간비용: {Math.round(timeCostA).toLocaleString()}</span>
//               </div>
//             </div>

//             {/* 옵션 B 그래프 */}
//             <div>
//               <div className="flex justify-between text-xs mb-1">
//                 <span className="font-bold text-slate-700">{optionB.name}</span>
//                 <span className="text-slate-500">{Math.round(totalCostB).toLocaleString()}원</span>
//               </div>
//               <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden flex">
//                 <div style={{ width: `${(optionB.price / maxCost) * 100}%` }} className="h-full bg-blue-400"></div>
//                 <div style={{ width: `${(timeCostB / maxCost) * 100}%` }} className="h-full bg-red-400"></div>
//               </div>
//               <div className="flex justify-between text-[10px] text-slate-400 mt-1">
//                 <span>지출: {optionB.price.toLocaleString()}</span>
//                 <span className="text-red-400">시간비용: {Math.round(timeCostB).toLocaleString()}</span>
//               </div>
//             </div>
//           </div>

//           {/* 최종 결론 */}
//           <div className="bg-slate-800 rounded-xl p-5 text-center text-white shadow-lg mt-4">
//             <p className="text-slate-400 text-xs mb-2">최종 의사결정 가이드</p>
//             <div className="text-xl font-bold mb-1">
//               <span className="text-yellow-400">{bestOption.name}</span> 선택 시
//             </div>
//             <div className="text-sm">
//               총 <span className="text-green-400 font-bold">{Math.round(difference).toLocaleString()}원</span>의 가치를 절약합니다.
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// 3차 개선안 확장하기
// import React, { useState, useEffect } from 'react';

// // 1. 교통수단 카테고리 데이터 (확장성 확보)
// const TRANSPORT_OPTIONS = [
//   { id: 'walk', label: '🚶 도보', defaultPrice: 0, defaultTime: 30 },
//   { id: 'bus', label: '🚌 버스', defaultPrice: 1500, defaultTime: 20 },
//   { id: 'subway', label: '🚇 지하철', defaultPrice: 1400, defaultTime: 15 },
//   { id: 'taxi', label: '🚖 택시', defaultPrice: 12000, defaultTime: 10 },
//   { id: 'train', label: '🚄 기차/KTX', defaultPrice: 8400, defaultTime: 25 },
//   { id: 'car', label: '🚗 자차', defaultPrice: 5000, defaultTime: 25 },
//   { id: 'custom', label: '✏️ 직접 입력', defaultPrice: 0, defaultTime: 0 },
// ];

// function App() {
//   const [hourlyRate, setHourlyRate] = useState(10320); // 노아의 시급

//   // 2. 초기 상태: 옵션 A(버스) vs 옵션 B(도보)
//   const [optionA, setOptionA] = useState({ ...TRANSPORT_OPTIONS[1], price: 1500, time: 20 });
//   const [optionB, setOptionB] = useState({ ...TRANSPORT_OPTIONS[0], price: 0, time: 40 });

//   // 카테고리 변경 핸들러 (선택 시 기본값 자동 입력)
//   const handleCategoryChange = (setter, optionId) => {
//     const selected = TRANSPORT_OPTIONS.find(opt => opt.id === optionId);
//     if (selected) {
//       setter({ 
//         ...selected, 
//         price: selected.defaultPrice, 
//         time: selected.defaultTime 
//       });
//     }
//   };

//   // 3. 핵심 비즈니스 로직: 기회비용 계산
//   const minuteValue = hourlyRate / 60;
  
//   const calculateTotalCost = (opt) => opt.price + (opt.time * minuteValue);
//   const totalCostA = calculateTotalCost(optionA);
//   const totalCostB = calculateTotalCost(optionB);

//   const difference = Math.abs(totalCostA - totalCostB);
//   const bestOption = totalCostA < totalCostB ? optionA : optionB;
  
//   // 4. 손익분기점(Break-even Point) 분석 로직
//   // (가격차이) / (시간차이) * 60 = 손익분기 시급
//   const priceDiff = Math.abs(optionA.price - optionB.price);
//   const timeDiff = Math.abs(optionA.time - optionB.time);
//   const breakEvenRate = timeDiff > 0 ? (priceDiff / timeDiff) * 60 : 0;
  
//   // 시각화용 최대값 (그래프 비율)
//   const maxCost = Math.max(totalCostA, totalCostB, 1);

//   return (
//     <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 font-sans text-slate-900">
//       <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
        
//         {/* 헤더 */}
//         <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
//           <div>
//             <h1 className="text-xl font-bold">노아의 이동수단 비교 분석기 🚦</h1>
//             <p className="text-slate-400 text-xs mt-1">버스, 지하철, 택시... 무엇이 가장 이득일까?</p>
//           </div>
//           <div className="text-right">
//             <div className="text-[10px] text-slate-400 font-bold uppercase">내 시간 가치</div>
//             <div className="font-bold text-xl text-yellow-400">₩{hourlyRate.toLocaleString()}</div>
//           </div>
//         </div>

//         <div className="p-6 space-y-8">
          
//           {/* 1. 시급 설정 */}
//           <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 flex justify-between items-center">
//             <label className="font-bold text-blue-800 text-sm">💰 나의 시급 설정</label>
//             <div className="flex items-center">
//               <span className="font-bold text-blue-900 mr-2">₩</span>
//               <input 
//                 type="number" 
//                 value={hourlyRate} 
//                 onChange={(e) => setHourlyRate(Number(e.target.value))}
//                 className="bg-transparent text-xl font-black text-blue-900 w-32 text-right focus:outline-none border-b border-blue-300"
//               />
//             </div>
//           </div>

//           {/* 2. 비교 옵션 입력 (동적 카드) */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {[ 
//               { title: '옵션 A', state: optionA, setter: setOptionA },
//               { title: '옵션 B', state: optionB, setter: setOptionB }
//             ].map((box, idx) => (
//               <div key={idx} className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-all">
//                 <div className="flex justify-between items-center mb-4">
//                   <span className="text-xs font-bold text-slate-400 uppercase">{box.title}</span>
//                   {/* 카테고리 선택 셀렉트 박스 */}
//                   <select 
//                     className="text-sm font-bold bg-slate-100 p-1 rounded-lg outline-none cursor-pointer"
//                     value={box.state.id}
//                     onChange={(e) => handleCategoryChange(box.setter, e.target.value)}
//                   >
//                     {TRANSPORT_OPTIONS.map(opt => (
//                       <option key={opt.id} value={opt.id}>{opt.label}</option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className="space-y-3">
//                   <div>
//                     <label className="text-[10px] font-bold text-slate-400 block mb-1">비용 (원)</label>
//                     <input 
//                       type="number" 
//                       value={box.state.price} 
//                       onChange={(e) => box.setter({...box.state, price: Number(e.target.value)})}
//                       className="w-full text-lg font-bold border-b border-slate-200 focus:border-blue-500 outline-none py-1"
//                     />
//                   </div>
//                   <div>
//                     <label className="text-[10px] font-bold text-slate-400 block mb-1">소요 시간 (분)</label>
//                     <input 
//                       type="number" 
//                       value={box.state.time} 
//                       onChange={(e) => box.setter({...box.state, time: Number(e.target.value)})}
//                       className="w-full text-lg font-bold border-b border-slate-200 focus:border-blue-500 outline-none py-1"
//                     />
//                   </div>
//                 </div>

//                 {/* 개별 총비용 미리보기 */}
//                 <div className="mt-4 pt-3 border-t border-dashed border-slate-200 text-right">
//                   <span className="text-xs text-slate-500 mr-2">총 기회비용</span>
//                   <span className="font-bold text-slate-800">{Math.round(idx === 0 ? totalCostA : totalCostB).toLocaleString()}원</span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* 3. 분석 결과 (그래프 + 인사이트) */}
//           <div className="bg-white rounded-xl border border-slate-200 p-6">
//             <h3 className="text-sm font-bold text-slate-800 mb-6">📊 비용 구조 상세 비교</h3>
            
//             {/* 그래프 A */}
//             <div className="mb-6">
//               <div className="flex justify-between text-xs mb-2 font-bold text-slate-600">
//                 <span>{optionA.label}</span>
//                 <span>{Math.round(totalCostA).toLocaleString()}원</span>
//               </div>
//               <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden flex">
//                 <div style={{ width: `${(optionA.price / maxCost) * 100}%` }} className="h-full bg-blue-500"></div>
//                 <div style={{ width: `${((optionA.time * minuteValue) / maxCost) * 100}%` }} className="h-full bg-red-400"></div>
//               </div>
//               <div className="flex justify-between text-[10px] text-slate-400 mt-1">
//                 <span className="text-blue-500">지출: {optionA.price.toLocaleString()}</span>
//                 <span className="text-red-400">시간가치: {Math.round(optionA.time * minuteValue).toLocaleString()}</span>
//               </div>
//             </div>

//             {/* 그래프 B */}
//             <div>
//               <div className="flex justify-between text-xs mb-2 font-bold text-slate-600">
//                 <span>{optionB.label}</span>
//                 <span>{Math.round(totalCostB).toLocaleString()}원</span>
//               </div>
//               <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden flex">
//                 <div style={{ width: `${(optionB.price / maxCost) * 100}%` }} className="h-full bg-blue-500"></div>
//                 <div style={{ width: `${((optionB.time * minuteValue) / maxCost) * 100}%` }} className="h-full bg-red-400"></div>
//               </div>
//               <div className="flex justify-between text-[10px] text-slate-400 mt-1">
//                 <span className="text-blue-500">지출: {optionB.price.toLocaleString()}</span>
//                 <span className="text-red-400">시간가치: {Math.round(optionB.time * minuteValue).toLocaleString()}</span>
//               </div>
//             </div>
//           </div>

//           {/* 4. 최종 인사이트 (손익분기점 포함) */}
//           <div className="bg-slate-900 rounded-2xl p-6 text-center shadow-lg relative overflow-hidden">
//             <div className="relative z-10">
//               <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mb-3">AI Decision Result</p>
              
//               <div className="text-2xl font-bold text-white mb-2">
//                 <span className="text-yellow-400 underline decoration-4 underline-offset-4">{bestOption.label}</span> 선택 시
//               </div>
              
//               <p className="text-slate-300 text-sm mb-6">
//                 약 <span className="font-bold text-green-400">{Math.round(difference).toLocaleString()}원</span>의 가치를 아낄 수 있습니다.
//               </p>

//               {/* 손익분기점 팁 */}
//               {breakEvenRate > 0 && Math.abs(breakEvenRate - hourlyRate) > 1000 && (
//                 <div className="bg-white/10 p-3 rounded-lg text-xs text-slate-300 inline-block text-left">
//                   <span className="block font-bold text-yellow-200 mb-1">💡 의사결정 Tip</span>
//                   노아님의 시급이 <span className="text-white font-bold">{Math.round(breakEvenRate).toLocaleString()}원</span> 이상이라면,<br/>
//                   시간을 아끼기 위해 더 빠른 수단을 선택하는 것이 이득입니다.
//                 </div>
//               )}
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';

// // 교통수단 카테고리 데이터
// const TRANSPORT_OPTIONS = [
//   { id: 'walk', label: '🚶 도보', defaultPrice: 0, defaultTime: 30 },
//   { id: 'bus', label: '🚌 버스', defaultPrice: 1500, defaultTime: 20 },
//   { id: 'subway', label: '🚇 지하철', defaultPrice: 1400, defaultTime: 15 },
//   { id: 'taxi', label: '🚖 택시', defaultPrice: 12000, defaultTime: 10 },
//   { id: 'train', label: '🚄 기차/KTX', defaultPrice: 8400, defaultTime: 25 },
//   { id: 'car', label: '🚗 자차', defaultPrice: 5000, defaultTime: 25 },
//   { id: 'custom', label: '✏️ 직접 입력', defaultPrice: '', defaultTime: '' },
// ];

// function App() {
//   // 1. 시급 설정 (기본값 10,320원)
//   // 입력 편의를 위해 숫자가 아닌 문자열('')도 허용
//   const [hourlyRate, setHourlyRate] = useState(10320);

//   // 2. 초기 상태 설정
//   const [optionA, setOptionA] = useState({ ...TRANSPORT_OPTIONS[1], price: 1500, time: 20 });
//   const [optionB, setOptionB] = useState({ ...TRANSPORT_OPTIONS[0], price: 0, time: 40 });

//   // 공통 입력 핸들러 (0이 남지 않게 처리)
//   const handleInputChange = (setter, currentObj, field, value) => {
//     // 입력값이 없으면 빈 문자열로 설정, 있으면 숫자로 변환
//     const newValue = value === '' ? '' : Number(value);
//     setter({ ...currentObj, [field]: newValue });
//   };

//   // 카테고리 변경 핸들러
//   const handleCategoryChange = (setter, optionId) => {
//     const selected = TRANSPORT_OPTIONS.find(opt => opt.id === optionId);
//     if (selected) {
//       setter({ 
//         ...selected, 
//         price: selected.defaultPrice === '' ? '' : selected.defaultPrice, 
//         time: selected.defaultTime === '' ? '' : selected.defaultTime
//       });
//     }
//   };

//   // 3. 계산 로직 (빈 문자열일 경우 0으로 취급하여 계산 오류 방지)
//   const safeHourlyRate = Number(hourlyRate) || 0;
//   const minuteValue = safeHourlyRate / 60;
  
//   const calculateTotalCost = (opt) => {
//     const price = Number(opt.price) || 0;
//     const time = Number(opt.time) || 0;
//     return price + (time * minuteValue);
//   };

//   const totalCostA = calculateTotalCost(optionA);
//   const totalCostB = calculateTotalCost(optionB);

//   const difference = Math.abs(totalCostA - totalCostB);
//   const bestOption = totalCostA < totalCostB ? optionA : optionB;
  
//   // 손익분기점 계산
//   const priceA = Number(optionA.price) || 0;
//   const priceB = Number(optionB.price) || 0;
//   const timeA = Number(optionA.time) || 0;
//   const timeB = Number(optionB.time) || 0;

//   const priceDiff = Math.abs(priceA - priceB);
//   const timeDiff = Math.abs(timeA - timeB);
//   const breakEvenRate = timeDiff > 0 ? (priceDiff / timeDiff) * 60 : 0;
  
//   const maxCost = Math.max(totalCostA, totalCostB, 1);

//   return (
//     <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 font-sans text-slate-900">
//       <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
        
//         {/* 헤더 */}
//         <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
//           <div>
//             <h1 className="text-xl font-bold">노아의 이동수단 비교 분석기 🚦</h1>
//             <p className="text-slate-400 text-xs mt-1">시간과 돈, 무엇을 아껴야 할까?</p>
//           </div>
//         </div>

//         <div className="p-6 space-y-8">
          
//           {/* 1. 시급 설정 */}
//           <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
//             <div className="flex justify-between items-center mb-2">
//               <label className="font-bold text-blue-800 text-sm">💰 나의 시급 설정</label>
//               <div className="flex items-center">
//                 <span className="font-bold text-blue-900 mr-2">₩</span>
//                 <input 
//                   type="number" 
//                   value={hourlyRate} 
//                   onChange={(e) => setHourlyRate(e.target.value === '' ? '' : Number(e.target.value))}
//                   placeholder="0"
//                   className="bg-transparent text-2xl font-black text-blue-900 w-36 text-right focus:outline-none border-b border-blue-300 placeholder-blue-200"
//                 />
//               </div>
//             </div>
//             {/* 요청하신 최저시급 문구 추가 */}
//             <div className="text-right">
//               <span className="text-xs text-blue-500 font-medium bg-blue-100 px-2 py-1 rounded-full">
//                 ℹ️ 2026년 최저시급 기준: 10,320원
//               </span>
//             </div>
//           </div>

//           {/* 2. 비교 옵션 입력 */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {[ 
//               { title: '옵션 A', state: optionA, setter: setOptionA },
//               { title: '옵션 B', state: optionB, setter: setOptionB }
//             ].map((box, idx) => (
//               <div key={idx} className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-all">
//                 <div className="flex justify-between items-center mb-4">
//                   <span className="text-xs font-bold text-slate-400 uppercase">{box.title}</span>
//                   <select 
//                     className="text-sm font-bold bg-slate-100 p-1 rounded-lg outline-none cursor-pointer border border-slate-200"
//                     value={box.state.id}
//                     onChange={(e) => handleCategoryChange(box.setter, e.target.value)}
//                   >
//                     {TRANSPORT_OPTIONS.map(opt => (
//                       <option key={opt.id} value={opt.id}>{opt.label}</option>
//                     ))}
//                   </select>
//                 </div>

//                 <div className="space-y-4">
//                   <div>
//                     <label className="text-[10px] font-bold text-slate-400 block mb-1">비용 (원)</label>
//                     <input 
//                       type="number" 
//                       value={box.state.price} 
//                       onChange={(e) => handleInputChange(box.setter, box.state, 'price', e.target.value)}
//                       placeholder="0"
//                       className="w-full text-lg font-bold border-b border-slate-200 focus:border-blue-500 outline-none py-1 placeholder-slate-300"
//                     />
//                   </div>
//                   <div>
//                     <label className="text-[10px] font-bold text-slate-400 block mb-1">소요 시간 (분)</label>
//                     <input 
//                       type="number" 
//                       value={box.state.time} 
//                       onChange={(e) => handleInputChange(box.setter, box.state, 'time', e.target.value)}
//                       placeholder="0"
//                       className="w-full text-lg font-bold border-b border-slate-200 focus:border-blue-500 outline-none py-1 placeholder-slate-300"
//                     />
//                   </div>
//                 </div>

//                 <div className="mt-4 pt-3 border-t border-dashed border-slate-200 text-right">
//                   <span className="text-xs text-slate-500 mr-2">기회비용 합계</span>
//                   <span className="font-bold text-slate-800">
//                     {Math.round(idx === 0 ? totalCostA : totalCostB).toLocaleString()}원
//                   </span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* 3. 분석 결과 그래프 */}
//           <div className="bg-white rounded-xl border border-slate-200 p-6">
//             <h3 className="text-sm font-bold text-slate-800 mb-6">📊 비용 구조 시각화</h3>
            
//             {[
//               { label: optionA.label, price: priceA, time: timeA, total: totalCostA, color: 'blue' },
//               { label: optionB.label, price: priceB, time: timeB, total: totalCostB, color: 'indigo' }
//             ].map((opt, i) => (
//               <div key={i} className="mb-6 last:mb-0">
//                 <div className="flex justify-between text-xs mb-2 font-bold text-slate-600">
//                   <span>{opt.label}</span>
//                   <span>{Math.round(opt.total).toLocaleString()}원</span>
//                 </div>
//                 <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden flex">
//                   <div style={{ width: `${(opt.price / maxCost) * 100}%` }} className={`h-full bg-${opt.color}-500`}></div>
//                   <div style={{ width: `${((opt.time * minuteValue) / maxCost) * 100}%` }} className="h-full bg-red-400"></div>
//                 </div>
//                 <div className="flex justify-between text-[10px] text-slate-400 mt-1">
//                   <span className={`text-${opt.color}-500`}>지출: {opt.price.toLocaleString()}</span>
//                   <span className="text-red-400">시간가치: {Math.round(opt.time * minuteValue).toLocaleString()}</span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* 4. 최종 결론 */}
//           <div className="bg-slate-900 rounded-2xl p-6 text-center shadow-lg">
//             <div className="text-2xl font-bold text-white mb-2">
//               <span className="text-yellow-400 underline decoration-4 underline-offset-4">{bestOption.label}</span> 선택!
//             </div>
            
//             <p className="text-slate-300 text-sm mb-4">
//               총 <span className="font-bold text-green-400">{Math.round(difference).toLocaleString()}원</span> 더 합리적입니다.
//             </p>

//             {breakEvenRate > 0 && Math.abs(breakEvenRate - safeHourlyRate) > 100 && (
//               <div className="inline-block bg-white/10 px-4 py-2 rounded-lg text-xs text-slate-300 text-left">
//                 <span className="block font-bold text-yellow-200 mb-1">💡 손익분기점 분석</span>
//                 {breakEvenRate > safeHourlyRate ? (
//                   <>현재 시급으로는 <span className="text-white font-bold">{bestOption.label}</span>이 이득이지만,<br/>시급이 <span className="text-white font-bold">{Math.round(breakEvenRate).toLocaleString()}원</span>을 넘으면 선택을 바꾸세요.</>
//                 ) : (
//                   <>시급이 <span className="text-white font-bold">{Math.round(breakEvenRate).toLocaleString()}원</span> 이상이라<br/>시간을 아끼는 선택이 유리합니다.</>
//                 )}
//               </div>
//             )}
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';

// // 교통수단 카테고리 데이터
// const TRANSPORT_OPTIONS = [
//   { id: 'walk', label: '🚶 도보', defaultPrice: 0, defaultTime: 30 },
//   { id: 'bus', label: '🚌 버스', defaultPrice: 1500, defaultTime: 20 },
//   { id: 'subway', label: '🚇 지하철', defaultPrice: 1400, defaultTime: 15 },
//   { id: 'taxi', label: '🚖 택시', defaultPrice: 12000, defaultTime: 10 },
//   { id: 'train', label: '🚄 기차/KTX', defaultPrice: 8400, defaultTime: 25 },
//   { id: 'car', label: '🚗 자차', defaultPrice: 5000, defaultTime: 25 },
//   { id: 'custom', label: '✏️ 기타', defaultPrice: '', defaultTime: '' },
// ];

// function App() {
//   // 1. 시급 설정 (기본값 10,320원)
//   const [hourlyRate, setHourlyRate] = useState(10320);

//   // 2. 초기 상태 설정
//   const [optionA, setOptionA] = useState({ ...TRANSPORT_OPTIONS[1], price: 1500, time: 20 });
//   const [optionB, setOptionB] = useState({ ...TRANSPORT_OPTIONS[0], price: 0, time: 40 });

//   // 공통 입력 핸들러
//   const handleInputChange = (setter, currentObj, field, value) => {
//     const newValue = value === '' ? '' : Number(value);
//     setter({ ...currentObj, [field]: newValue });
//   };

//   // 카테고리 변경 핸들러
//   const handleCategoryChange = (setter, optionId) => {
//     const selected = TRANSPORT_OPTIONS.find(opt => opt.id === optionId);
//     if (selected) {
//       setter({ 
//         ...selected, 
//         price: selected.defaultPrice === '' ? '' : selected.defaultPrice, 
//         time: selected.defaultTime === '' ? '' : selected.defaultTime
//       });
//     }
//   };

//   // 3. 계산 로직
//   const safeHourlyRate = Number(hourlyRate) || 0;
//   const minuteValue = safeHourlyRate / 60;
  
//   const calculateTotalCost = (opt) => {
//     const price = Number(opt.price) || 0;
//     const time = Number(opt.time) || 0;
//     return price + (time * minuteValue);
//   };

//   const totalCostA = calculateTotalCost(optionA);
//   const totalCostB = calculateTotalCost(optionB);

//   const difference = Math.abs(totalCostA - totalCostB);
//   const bestOption = totalCostA < totalCostB ? optionA : optionB;
  
//   // 손익분기점 계산
//   const priceA = Number(optionA.price) || 0;
//   const priceB = Number(optionB.price) || 0;
//   const timeA = Number(optionA.time) || 0;
//   const timeB = Number(optionB.time) || 0;

//   const priceDiff = Math.abs(priceA - priceB);
//   const timeDiff = Math.abs(timeA - timeB);
//   const breakEvenRate = timeDiff > 0 ? (priceDiff / timeDiff) * 60 : 0;
  
//   const maxCost = Math.max(totalCostA, totalCostB, 1);

//   return (
//     <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 font-sans text-slate-900">
//       <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
        
//         {/* 헤더 */}
//         <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
//           <div>
//             <h1 className="text-xl font-bold">노아의 이동수단 비교 분석기 🚦</h1>
//             <p className="text-slate-400 text-xs mt-1">시간과 돈, 무엇을 아껴야 할까?</p>
//           </div>
//         </div>

//         <div className="p-6 space-y-8">
          
//           {/* 1. 시급 설정 */}
//           <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
//             <div className="flex justify-between items-center mb-2">
//               <label className="font-bold text-blue-800 text-sm">💰 나의 시급 설정</label>
//               <div className="flex items-center">
//                 <span className="font-bold text-blue-900 mr-2">₩</span>
//                 <input 
//                   type="number" 
//                   value={hourlyRate} 
//                   onChange={(e) => setHourlyRate(e.target.value === '' ? '' : Number(e.target.value))}
//                   placeholder="0"
//                   className="bg-transparent text-2xl font-black text-blue-900 w-36 text-right focus:outline-none border-b border-blue-300 placeholder-blue-200"
//                 />
//               </div>
//             </div>
//             <div className="text-right">
//               <span className="text-xs text-blue-500 font-medium bg-blue-100 px-2 py-1 rounded-full">
//                 ℹ️ 2026년 최저시급 기준: 10,320원
//               </span>
//             </div>
//           </div>

//           {/* 2. 비교 옵션 입력 */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {[ 
//               { title: '옵션 A', state: optionA, setter: setOptionA },
//               { title: '옵션 B', state: optionB, setter: setOptionB }
//             ].map((box, idx) => {
//               // 도보인지 확인하는 변수
//               const isWalk = box.state.id === 'walk';

//               return (
//                 <div key={idx} className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-all">
//                   <div className="flex justify-between items-center mb-4">
//                     <span className="text-xs font-bold text-slate-400 uppercase">{box.title}</span>
//                     <select 
//                       className="text-sm font-bold bg-slate-100 p-1 rounded-lg outline-none cursor-pointer border border-slate-200"
//                       value={box.state.id}
//                       onChange={(e) => handleCategoryChange(box.setter, e.target.value)}
//                     >
//                       {TRANSPORT_OPTIONS.map(opt => (
//                         <option key={opt.id} value={opt.id}>{opt.label}</option>
//                       ))}
//                     </select>
//                   </div>

//                   <div className="space-y-4">
//                     <div>
//                       <label className="text-[10px] font-bold text-slate-400 block mb-1">비용 (원)</label>
//                       <input 
//                         type="number" 
//                         value={box.state.price} 
//                         onChange={(e) => handleInputChange(box.setter, box.state, 'price', e.target.value)}
//                         placeholder="0"
//                         disabled={isWalk} // ✨ 도보일 때 입력 비활성화
//                         className={`w-full text-lg font-bold border-b border-slate-200 outline-none py-1 placeholder-slate-300 
//                           ${isWalk ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'focus:border-blue-500'}`} // ✨ 비활성화 스타일 적용
//                       />
//                     </div>
//                     <div>
//                       <label className="text-[10px] font-bold text-slate-400 block mb-1">소요 시간 (분)</label>
//                       <input 
//                         type="number" 
//                         value={box.state.time} 
//                         onChange={(e) => handleInputChange(box.setter, box.state, 'time', e.target.value)}
//                         placeholder="0"
//                         className="w-full text-lg font-bold border-b border-slate-200 focus:border-blue-500 outline-none py-1 placeholder-slate-300"
//                       />
//                     </div>
//                   </div>

//                   <div className="mt-4 pt-3 border-t border-dashed border-slate-200 text-right">
//                     <span className="text-xs text-slate-500 mr-2">기회비용 합계</span>
//                     <span className="font-bold text-slate-800">
//                       {Math.round(idx === 0 ? totalCostA : totalCostB).toLocaleString()}원
//                     </span>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* 3. 분석 결과 그래프 */}
//           <div className="bg-white rounded-xl border border-slate-200 p-6">
//             <h3 className="text-sm font-bold text-slate-800 mb-6">📊 비용 구조 시각화</h3>
            
//             {[
//               { label: optionA.label, price: priceA, time: timeA, total: totalCostA, color: 'blue' },
//               { label: optionB.label, price: priceB, time: timeB, total: totalCostB, color: 'indigo' }
//             ].map((opt, i) => (
//               <div key={i} className="mb-6 last:mb-0">
//                 <div className="flex justify-between text-xs mb-2 font-bold text-slate-600">
//                   <span>{opt.label}</span>
//                   <span>{Math.round(opt.total).toLocaleString()}원</span>
//                 </div>
//                 <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden flex">
//                   <div style={{ width: `${(opt.price / maxCost) * 100}%` }} className={`h-full bg-${opt.color}-500`}></div>
//                   <div style={{ width: `${((opt.time * minuteValue) / maxCost) * 100}%` }} className="h-full bg-red-400"></div>
//                 </div>
//                 <div className="flex justify-between text-[10px] text-slate-400 mt-1">
//                   <span className={`text-${opt.color}-500`}>지출: {opt.price.toLocaleString()}</span>
//                   <span className="text-red-400">시간가치: {Math.round(opt.time * minuteValue).toLocaleString()}</span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* 4. 최종 결론 */}
//           <div className="bg-slate-900 rounded-2xl p-6 text-center shadow-lg">
//             <div className="text-2xl font-bold text-white mb-2">
//               <span className="text-yellow-400 underline decoration-4 underline-offset-4">{bestOption.label}</span> 선택!
//             </div>
            
//             <p className="text-slate-300 text-sm mb-4">
//               총 <span className="font-bold text-green-400">{Math.round(difference).toLocaleString()}원</span> 더 합리적입니다.
//             </p>

//             {breakEvenRate > 0 && Math.abs(breakEvenRate - safeHourlyRate) > 100 && (
//               <div className="inline-block bg-white/10 px-4 py-2 rounded-lg text-xs text-slate-300 text-left">
//                 <span className="block font-bold text-yellow-200 mb-1">💡 손익분기점 분석</span>
//                 {breakEvenRate > safeHourlyRate ? (
//                   <>현재 시급으로는 <span className="text-white font-bold">{bestOption.label}</span>이 이득이지만,<br/>시급이 <span className="text-white font-bold">{Math.round(breakEvenRate).toLocaleString()}원</span>을 넘으면 선택을 바꾸세요.</>
//                 ) : (
//                   <>시급이 <span className="text-white font-bold">{Math.round(breakEvenRate).toLocaleString()}원</span> 이상이라<br/>시간을 아끼는 선택이 유리합니다.</>
//                 )}
//               </div>
//             )}
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from 'react';

// // 교통수단 카테고리 데이터
// const TRANSPORT_OPTIONS = [
//   { id: 'walk', label: '🚶 도보', defaultPrice: 0, defaultTime: 30 },
//   { id: 'bus', label: '🚌 버스', defaultPrice: 1500, defaultTime: 20 },
//   { id: 'subway', label: '🚇 지하철', defaultPrice: 1400, defaultTime: 15 },
//   { id: 'taxi', label: '🚖 택시', defaultPrice: 12000, defaultTime: 10 },
//   { id: 'train', label: '🚄 기차/KTX', defaultPrice: 8400, defaultTime: 25 },
//   { id: 'car', label: '🚗 자차', defaultPrice: 5000, defaultTime: 25 },
//   { id: 'custom', label: '✏️ 직접 입력', defaultPrice: '', defaultTime: '' },
// ];

// function App() {
//   // 1. 시급 설정 (기본값 10,320원)
//   const [hourlyRate, setHourlyRate] = useState(10320);

//   // 2. 초기 상태 설정
//   const [optionA, setOptionA] = useState({ ...TRANSPORT_OPTIONS[1], price: 1500, time: 20 });
//   const [optionB, setOptionB] = useState({ ...TRANSPORT_OPTIONS[0], price: 0, time: 40 });

//   // 공통 입력 핸들러
//   const handleInputChange = (setter, currentObj, field, value) => {
//     const newValue = value === '' ? '' : Number(value);
//     setter({ ...currentObj, [field]: newValue });
//   };

//   // 카테고리 변경 핸들러
//   const handleCategoryChange = (setter, optionId) => {
//     const selected = TRANSPORT_OPTIONS.find(opt => opt.id === optionId);
//     if (selected) {
//       setter({ 
//         ...selected, 
//         price: selected.defaultPrice === '' ? '' : selected.defaultPrice, 
//         time: selected.defaultTime === '' ? '' : selected.defaultTime
//       });
//     }
//   };

//   // 3. 계산 로직
//   const safeHourlyRate = Number(hourlyRate) || 0;
//   const minuteValue = safeHourlyRate / 60;
  
//   const calculateTotalCost = (opt) => {
//     const price = Number(opt.price) || 0;
//     const time = Number(opt.time) || 0;
//     return price + (time * minuteValue);
//   };

//   const totalCostA = calculateTotalCost(optionA);
//   const totalCostB = calculateTotalCost(optionB);

//   const difference = Math.abs(totalCostA - totalCostB);
//   const bestOption = totalCostA < totalCostB ? optionA : optionB;
  
//   // 손익분기점 계산
//   const priceA = Number(optionA.price) || 0;
//   const priceB = Number(optionB.price) || 0;
//   const timeA = Number(optionA.time) || 0;
//   const timeB = Number(optionB.time) || 0;

//   const priceDiff = Math.abs(priceA - priceB);
//   const timeDiff = Math.abs(timeA - timeB);
//   const breakEvenRate = timeDiff > 0 ? (priceDiff / timeDiff) * 60 : 0;
  
//   const maxCost = Math.max(totalCostA, totalCostB, 1);

//   return (
//     <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 font-sans text-slate-900">
//       <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
        
//         {/* 헤더 */}
//         <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
//           <div>
//             <h1 className="text-xl font-bold">노아의 이동수단 비교 분석기 🚦</h1>
//             <p className="text-slate-400 text-xs mt-1">시간과 돈, 무엇을 아껴야 할까?</p>
//           </div>
//         </div>

//         <div className="p-6 space-y-8">
          
//           {/* 1. 시급 설정 */}
//           <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
//             <div className="flex justify-between items-center mb-2">
//               <label className="font-bold text-blue-800 text-sm">💰 나의 시급 설정</label>
//               <div className="flex items-center">
//                 <span className="font-bold text-blue-900 mr-2">₩</span>
//                 <input 
//                   type="number" 
//                   value={hourlyRate} 
//                   onChange={(e) => setHourlyRate(e.target.value === '' ? '' : Number(e.target.value))}
//                   placeholder="0"
//                   className="bg-transparent text-2xl font-black text-blue-900 w-36 text-right focus:outline-none border-b border-blue-300 placeholder-blue-200"
//                 />
//               </div>
//             </div>
//             <div className="text-right">
//               <span className="text-xs text-blue-500 font-medium bg-blue-100 px-2 py-1 rounded-full">
//                 ℹ️ 2026년 최저시급 기준: 10,320원
//               </span>
//             </div>
//           </div>

//           {/* 2. 비교 옵션 입력 */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {[ 
//               { title: '옵션 A', state: optionA, setter: setOptionA },
//               { title: '옵션 B', state: optionB, setter: setOptionB }
//             ].map((box, idx) => {
//               const isWalk = box.state.id === 'walk';
//               return (
//                 <div key={idx} className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-all">
//                   <div className="flex justify-between items-center mb-4">
//                     <span className="text-xs font-bold text-slate-400 uppercase">{box.title}</span>
//                     <select 
//                       className="text-sm font-bold bg-slate-100 p-1 rounded-lg outline-none cursor-pointer border border-slate-200"
//                       value={box.state.id}
//                       onChange={(e) => handleCategoryChange(box.setter, e.target.value)}
//                     >
//                       {TRANSPORT_OPTIONS.map(opt => (
//                         <option key={opt.id} value={opt.id}>{opt.label}</option>
//                       ))}
//                     </select>
//                   </div>

//                   <div className="space-y-4">
//                     <div>
//                       <label className="text-[10px] font-bold text-slate-400 block mb-1">비용 (원)</label>
//                       <input 
//                         type="number" 
//                         value={box.state.price} 
//                         onChange={(e) => handleInputChange(box.setter, box.state, 'price', e.target.value)}
//                         placeholder="0"
//                         disabled={isWalk}
//                         className={`w-full text-lg font-bold border-b border-slate-200 outline-none py-1 placeholder-slate-300 
//                           ${isWalk ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'focus:border-blue-500'}`}
//                       />
//                     </div>
//                     <div>
//                       <label className="text-[10px] font-bold text-slate-400 block mb-1">소요 시간 (분)</label>
//                       <input 
//                         type="number" 
//                         value={box.state.time} 
//                         onChange={(e) => handleInputChange(box.setter, box.state, 'time', e.target.value)}
//                         placeholder="0"
//                         className="w-full text-lg font-bold border-b border-slate-200 focus:border-blue-500 outline-none py-1 placeholder-slate-300"
//                       />
//                     </div>
//                   </div>

//                   <div className="mt-4 pt-3 border-t border-dashed border-slate-200 text-right">
//                     <span className="text-xs text-slate-500 mr-2">기회비용 합계</span>
//                     <span className="font-bold text-slate-800">
//                       {Math.round(idx === 0 ? totalCostA : totalCostB).toLocaleString()}원
//                     </span>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* 3. 분석 결과 그래프 */}
//           <div className="bg-white rounded-xl border border-slate-200 p-6">
//             <h3 className="text-sm font-bold text-slate-800 mb-6">📊 비용 구조 시각화</h3>
            
//             {[
//               { label: optionA.label, price: priceA, time: timeA, total: totalCostA, color: 'blue' },
//               { label: optionB.label, price: priceB, time: timeB, total: totalCostB, color: 'indigo' }
//             ].map((opt, i) => (
//               <div key={i} className="mb-6 last:mb-0">
//                 <div className="flex justify-between text-xs mb-2 font-bold text-slate-600">
//                   <span>{opt.label}</span>
//                   <span>{Math.round(opt.total).toLocaleString()}원</span>
//                 </div>
//                 <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden flex">
//                   <div style={{ width: `${(opt.price / maxCost) * 100}%` }} className={`h-full bg-${opt.color}-500`}></div>
//                   <div style={{ width: `${((opt.time * minuteValue) / maxCost) * 100}%` }} className="h-full bg-red-400"></div>
//                 </div>
//                 <div className="flex justify-between text-[10px] text-slate-400 mt-1">
//                   <span className={`text-${opt.color}-500`}>지출: {opt.price.toLocaleString()}</span>
//                   <span className="text-red-400">시간가치: {Math.round(opt.time * minuteValue).toLocaleString()}</span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* 4. 최종 결론 */}
//           <div className="bg-slate-900 rounded-2xl p-6 text-center shadow-lg">
//             <div className="text-2xl font-bold text-white mb-2">
//               <span className="text-yellow-400 underline decoration-4 underline-offset-4">{bestOption.label}</span> 선택!
//             </div>
            
//             <p className="text-slate-300 text-sm mb-4">
//               총 <span className="font-bold text-green-400">{Math.round(difference).toLocaleString()}원</span> 더 합리적입니다.
//             </p>

//             {/* 요청하신 의사결정 Tip 코드 적용 */}
//             {breakEvenRate > 0 && Math.abs(breakEvenRate - safeHourlyRate) > 1000 && (
//               <div className="bg-white/10 p-3 rounded-lg text-xs text-slate-300 inline-block text-left">
//                 <span className="block font-bold text-yellow-200 mb-1">💡 의사결정 Tip</span>
//                 노아님의 시급이 <span className="text-white font-bold">{Math.round(breakEvenRate).toLocaleString()}원</span> 이상이라면,<br/>
//                 시간을 아끼기 위해 더 빠른 수단을 선택하는 것이 이득입니다.
//               </div>
//             )}
//           </div>

//         </div>
//      </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';

// // 교통수단 카테고리 데이터
// const TRANSPORT_OPTIONS = [
//   { id: 'walk', label: '🚶 도보', defaultPrice: 0, defaultTime: 30 },
//   { id: 'bus', label: '🚌 버스', defaultPrice: 1500, defaultTime: 20 },
//   { id: 'subway', label: '🚇 지하철', defaultPrice: 1400, defaultTime: 15 },
//   { id: 'taxi', label: '🚖 택시', defaultPrice: 12000, defaultTime: 10 },
//   { id: 'train', label: '🚄 기차/KTX', defaultPrice: 8400, defaultTime: 25 },
//   { id: 'car', label: '🚗 자차', defaultPrice: 5000, defaultTime: 25 },
//   { id: 'custom', label: '✏️ 직접 입력', defaultPrice: '', defaultTime: '' },
// ];

// function App() {
//   // 1. 시급 설정 (기본값 10,320원)
//   const [hourlyRate, setHourlyRate] = useState(10320);

//   // 2. 초기 상태 설정
//   const [optionA, setOptionA] = useState({ ...TRANSPORT_OPTIONS[1], price: 1500, time: 20 });
//   const [optionB, setOptionB] = useState({ ...TRANSPORT_OPTIONS[0], price: 0, time: 40 });

//   // 공통 입력 핸들러
//   const handleInputChange = (setter, currentObj, field, value) => {
//     const newValue = value === '' ? '' : Number(value);
//     setter({ ...currentObj, [field]: newValue });
//   };

//   // 카테고리 변경 핸들러
//   const handleCategoryChange = (setter, optionId) => {
//     const selected = TRANSPORT_OPTIONS.find(opt => opt.id === optionId);
//     if (selected) {
//       setter({ 
//         ...selected, 
//         price: selected.defaultPrice === '' ? '' : selected.defaultPrice, 
//         time: selected.defaultTime === '' ? '' : selected.defaultTime
//       });
//     }
//   };

//   // 3. 계산 로직
//   const safeHourlyRate = Number(hourlyRate) || 0;
//   const minuteValue = safeHourlyRate / 60;
  
//   const calculateTotalCost = (opt) => {
//     const price = Number(opt.price) || 0;
//     const time = Number(opt.time) || 0;
//     return price + (time * minuteValue);
//   };

//   const totalCostA = calculateTotalCost(optionA);
//   const totalCostB = calculateTotalCost(optionB);

//   const difference = Math.abs(totalCostA - totalCostB);
//   const bestOption = totalCostA < totalCostB ? optionA : optionB;
  
//   // 손익분기점 및 더 빠른 수단 식별 로직
//   const priceA = Number(optionA.price) || 0;
//   const priceB = Number(optionB.price) || 0;
//   const timeA = Number(optionA.time) || 0;
//   const timeB = Number(optionB.time) || 0;

//   const priceDiff = Math.abs(priceA - priceB);
//   const timeDiff = Math.abs(timeA - timeB);
//   const breakEvenRate = timeDiff > 0 ? (priceDiff / timeDiff) * 60 : 0;
  
//   // ✨ 핵심 추가: 둘 중 시간이 더 적게 걸리는 옵션 찾기
//   const fasterOption = timeA < timeB ? optionA : optionB;
  
//   const maxCost = Math.max(totalCostA, totalCostB, 1);

//   return (
//     <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 font-sans text-slate-900">
//       <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
        
//         {/* 헤더 */}
//         <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
//           <div>
//             <h1 className="text-xl font-bold">노아의 이동수단 비교 분석기 🚦</h1>
//             <p className="text-slate-400 text-xs mt-1">시간과 돈, 무엇을 아껴야 할까?</p>
//           </div>
//         </div>

//         <div className="p-6 space-y-8">
          
//           {/* 1. 시급 설정 */}
//           <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
//             <div className="flex justify-between items-center mb-2">
//               <label className="font-bold text-blue-800 text-sm">💰 나의 시급 설정</label>
//               <div className="flex items-center">
//                 <span className="font-bold text-blue-900 mr-2">₩</span>
//                 <input 
//                   type="number" 
//                   value={hourlyRate} 
//                   onChange={(e) => setHourlyRate(e.target.value === '' ? '' : Number(e.target.value))}
//                   placeholder="0"
//                   className="bg-transparent text-2xl font-black text-blue-900 w-36 text-right focus:outline-none border-b border-blue-300 placeholder-blue-200"
//                 />
//               </div>
//             </div>
//             <div className="text-right">
//               <span className="text-xs text-blue-500 font-medium bg-blue-100 px-2 py-1 rounded-full">
//                 ℹ️ 2026년 최저시급 기준: 10,320원
//               </span>
//             </div>
//           </div>

//           {/* 2. 비교 옵션 입력 */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {[ 
//               { title: '옵션 A', state: optionA, setter: setOptionA },
//               { title: '옵션 B', state: optionB, setter: setOptionB }
//             ].map((box, idx) => {
//               const isWalk = box.state.id === 'walk';
//               return (
//                 <div key={idx} className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-all">
//                   <div className="flex justify-between items-center mb-4">
//                     <span className="text-xs font-bold text-slate-400 uppercase">{box.title}</span>
//                     <select 
//                       className="text-sm font-bold bg-slate-100 p-1 rounded-lg outline-none cursor-pointer border border-slate-200"
//                       value={box.state.id}
//                       onChange={(e) => handleCategoryChange(box.setter, e.target.value)}
//                     >
//                       {TRANSPORT_OPTIONS.map(opt => (
//                         <option key={opt.id} value={opt.id}>{opt.label}</option>
//                       ))}
//                     </select>
//                   </div>

//                   <div className="space-y-4">
//                     <div>
//                       <label className="text-[10px] font-bold text-slate-400 block mb-1">비용 (원)</label>
//                       <input 
//                         type="number" 
//                         value={box.state.price} 
//                         onChange={(e) => handleInputChange(box.setter, box.state, 'price', e.target.value)}
//                         placeholder="0"
//                         disabled={isWalk}
//                         className={`w-full text-lg font-bold border-b border-slate-200 outline-none py-1 placeholder-slate-300 
//                           ${isWalk ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'focus:border-blue-500'}`}
//                       />
//                     </div>
//                     <div>
//                       <label className="text-[10px] font-bold text-slate-400 block mb-1">소요 시간 (분)</label>
//                       <input 
//                         type="number" 
//                         value={box.state.time} 
//                         onChange={(e) => handleInputChange(box.setter, box.state, 'time', e.target.value)}
//                         placeholder="0"
//                         className="w-full text-lg font-bold border-b border-slate-200 focus:border-blue-500 outline-none py-1 placeholder-slate-300"
//                       />
//                     </div>
//                   </div>

//                   <div className="mt-4 pt-3 border-t border-dashed border-slate-200 text-right">
//                     <span className="text-xs text-slate-500 mr-2">기회비용 합계</span>
//                     <span className="font-bold text-slate-800">
//                       {Math.round(idx === 0 ? totalCostA : totalCostB).toLocaleString()}원
//                     </span>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* 3. 분석 결과 그래프 */}
//           <div className="bg-white rounded-xl border border-slate-200 p-6">
//             <h3 className="text-sm font-bold text-slate-800 mb-6">📊 비용 구조 시각화</h3>
            
//             {[
//               { label: optionA.label, price: priceA, time: timeA, total: totalCostA, color: 'blue' },
//               { label: optionB.label, price: priceB, time: timeB, total: totalCostB, color: 'indigo' }
//             ].map((opt, i) => (
//               <div key={i} className="mb-6 last:mb-0">
//                 <div className="flex justify-between text-xs mb-2 font-bold text-slate-600">
//                   <span>{opt.label}</span>
//                   <span>{Math.round(opt.total).toLocaleString()}원</span>
//                 </div>
//                 <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden flex">
//                   <div style={{ width: `${(opt.price / maxCost) * 100}%` }} className={`h-full bg-${opt.color}-500`}></div>
//                   <div style={{ width: `${((opt.time * minuteValue) / maxCost) * 100}%` }} className="h-full bg-red-400"></div>
//                 </div>
//                 <div className="flex justify-between text-[10px] text-slate-400 mt-1">
//                   <span className={`text-${opt.color}-500`}>지출: {opt.price.toLocaleString()}</span>
//                   <span className="text-red-400">시간가치: {Math.round(opt.time * minuteValue).toLocaleString()}</span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* 4. 최종 결론 */}
//           <div className="bg-slate-900 rounded-2xl p-6 text-center shadow-lg">
//             <div className="text-2xl font-bold text-white mb-2">
//               <span className="text-yellow-400 underline decoration-4 underline-offset-4">{bestOption.label}</span> 선택!
//             </div>
            
//             <p className="text-slate-300 text-sm mb-4">
//               총 <span className="font-bold text-green-400">{Math.round(difference).toLocaleString()}원</span> 더 합리적입니다.
//             </p>

//             {/* ✨ 여기가 수정된 부분입니다: 구체적인 옵션 이름 명시 */}
//             {breakEvenRate > 0 && Math.abs(breakEvenRate - safeHourlyRate) > 1000 && (
//               <div className="bg-white/10 p-3 rounded-lg text-xs text-slate-300 inline-block text-left">
//                 <span className="block font-bold text-yellow-200 mb-1">💡 의사결정 Tip</span>
//                 노아님의 시급이 <span className="text-white font-bold">{Math.round(breakEvenRate).toLocaleString()}원</span> 이상이라면,<br/>
//                 시간을 아끼기 위해 <span className="text-white font-bold underline">{fasterOption.label}</span>을(를) 선택하는 것이 이득입니다.
//               </div>
//             )}
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

//5번째 시도
// import React, { useState } from 'react';

// // 교통수단 카테고리 데이터
// const TRANSPORT_OPTIONS = [
//   { id: 'walk', label: '🚶 도보', defaultPrice: 0, defaultTime: 30 },
//   { id: 'bus', label: '🚌 버스', defaultPrice: 1500, defaultTime: 20 },
//   { id: 'subway', label: '🚇 지하철', defaultPrice: 1400, defaultTime: 15 },
//   { id: 'taxi', label: '🚖 택시', defaultPrice: 12000, defaultTime: 10 },
//   { id: 'train', label: '🚄 기차/KTX', defaultPrice: 8400, defaultTime: 25 },
//   { id: 'car', label: '🚗 자차', defaultPrice: 5000, defaultTime: 25 },
//   { id: 'custom', label: '✏️ 직접 입력', defaultPrice: '', defaultTime: '' },
// ];

// function App() {
//   // 1. 시급 설정 (기본값 10,320원)
//   const [hourlyRate, setHourlyRate] = useState(10320);

//   // 2. 초기 상태 설정
//   const [optionA, setOptionA] = useState({ ...TRANSPORT_OPTIONS[1], price: 1500, time: 20 });
//   const [optionB, setOptionB] = useState({ ...TRANSPORT_OPTIONS[0], price: 0, time: 40 });

//   // 공통 입력 핸들러
//   const handleInputChange = (setter, currentObj, field, value) => {
//     const newValue = value === '' ? '' : Number(value);
//     setter({ ...currentObj, [field]: newValue });
//   };

//   // 카테고리 변경 핸들러
//   const handleCategoryChange = (setter, optionId) => {
//     const selected = TRANSPORT_OPTIONS.find(opt => opt.id === optionId);
//     if (selected) {
//       setter({ 
//         ...selected, 
//         price: selected.defaultPrice === '' ? '' : selected.defaultPrice, 
//         time: selected.defaultTime === '' ? '' : selected.defaultTime
//       });
//     }
//   };

//   // 3. 계산 로직
//   const safeHourlyRate = Number(hourlyRate) || 0;
//   const minuteValue = safeHourlyRate / 60;
  
//   const calculateTotalCost = (opt) => {
//     const price = Number(opt.price) || 0;
//     const time = Number(opt.time) || 0;
//     return price + (time * minuteValue);
//   };

//   const totalCostA = calculateTotalCost(optionA);
//   const totalCostB = calculateTotalCost(optionB);

//   const difference = Math.abs(totalCostA - totalCostB);
//   const bestOption = totalCostA < totalCostB ? optionA : optionB;
  
//   // 손익분기점 및 더 빠른 수단 식별 로직
//   const priceA = Number(optionA.price) || 0;
//   const priceB = Number(optionB.price) || 0;
//   const timeA = Number(optionA.time) || 0;
//   const timeB = Number(optionB.time) || 0;

//   const priceDiff = Math.abs(priceA - priceB);
//   const timeDiff = Math.abs(timeA - timeB);
//   const breakEvenRate = timeDiff > 0 ? (priceDiff / timeDiff) * 60 : 0;
  
//   // 더 빠른 수단 찾기 (시간이 적게 걸리는 쪽)
//   const fasterOption = timeA < timeB ? optionA : optionB;
  
//   const maxCost = Math.max(totalCostA, totalCostB, 1);

//   return (
//     <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 font-sans text-slate-900">
//       <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
        
//         {/* 헤더 */}
//         <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
//           <div>
//             <h1 className="text-xl font-bold">노아의 이동수단 비교 분석기 🚦</h1>
//             <p className="text-slate-400 text-xs mt-1">시간과 돈, 무엇을 아껴야 할까?</p>
//           </div>
//         </div>

//         <div className="p-6 space-y-8">
          
//           {/* 1. 시급 설정 */}
//           <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
//             <div className="flex justify-between items-center mb-2">
//               <label className="font-bold text-blue-800 text-sm">💰 나의 시급 설정</label>
//               <div className="flex items-center">
//                 <span className="font-bold text-blue-900 mr-2">₩</span>
//                 <input 
//                   type="number" 
//                   value={hourlyRate} 
//                   onChange={(e) => setHourlyRate(e.target.value === '' ? '' : Number(e.target.value))}
//                   placeholder="0"
//                   className="bg-transparent text-2xl font-black text-blue-900 w-36 text-right focus:outline-none border-b border-blue-300 placeholder-blue-200"
//                 />
//               </div>
//             </div>
//             <div className="text-right">
//               <span className="text-xs text-blue-500 font-medium bg-blue-100 px-2 py-1 rounded-full">
//                 ℹ️ 2026년 최저시급 기준: 10,320원
//               </span>
//             </div>
//           </div>

//           {/* 2. 비교 옵션 입력 */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {[ 
//               // ✨ otherState를 추가하여 상대방의 상태를 알 수 있게 함
//               { title: '옵션 A', state: optionA, setter: setOptionA, otherState: optionB },
//               { title: '옵션 B', state: optionB, setter: setOptionB, otherState: optionA }
//             ].map((box, idx) => {
//               const isWalk = box.state.id === 'walk';
//               return (
//                 <div key={idx} className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-all">
//                   <div className="flex justify-between items-center mb-4">
//                     <span className="text-xs font-bold text-slate-400 uppercase">{box.title}</span>
//                     <select 
//                       className="text-sm font-bold bg-slate-100 p-1 rounded-lg outline-none cursor-pointer border border-slate-200 max-w-[120px]"
//                       value={box.state.id}
//                       onChange={(e) => handleCategoryChange(box.setter, e.target.value)}
//                     >
//                       {TRANSPORT_OPTIONS.map(opt => {
//                         // ✨ 핵심 로직: 상대방이 도보이고, 현재 렌더링 중인 옵션도 도보라면 'disabled' 처리
//                         const isDisabled = box.otherState.id === 'walk' && opt.id === 'walk';
//                         return (
//                           <option key={opt.id} value={opt.id} disabled={isDisabled}>
//                             {opt.label} {isDisabled ? '(선택 불가)' : ''}
//                           </option>
//                         );
//                       })}
//                     </select>
//                   </div>

//                   <div className="space-y-4">
//                     <div>
//                       <label className="text-[10px] font-bold text-slate-400 block mb-1">비용 (원)</label>
//                       <input 
//                         type="number" 
//                         value={box.state.price} 
//                         onChange={(e) => handleInputChange(box.setter, box.state, 'price', e.target.value)}
//                         placeholder="0"
//                         disabled={isWalk}
//                         className={`w-full text-lg font-bold border-b border-slate-200 outline-none py-1 placeholder-slate-300 
//                           ${isWalk ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'focus:border-blue-500'}`}
//                       />
//                     </div>
//                     <div>
//                       <label className="text-[10px] font-bold text-slate-400 block mb-1">소요 시간 (분)</label>
//                       <input 
//                         type="number" 
//                         value={box.state.time} 
//                         onChange={(e) => handleInputChange(box.setter, box.state, 'time', e.target.value)}
//                         placeholder="0"
//                         className="w-full text-lg font-bold border-b border-slate-200 focus:border-blue-500 outline-none py-1 placeholder-slate-300"
//                       />
//                     </div>
//                   </div>

//                   <div className="mt-4 pt-3 border-t border-dashed border-slate-200 text-right">
//                     <span className="text-xs text-slate-500 mr-2">기회비용 합계</span>
//                     <span className="font-bold text-slate-800">
//                       {Math.round(idx === 0 ? totalCostA : totalCostB).toLocaleString()}원
//                     </span>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* 3. 분석 결과 그래프 */}
//           <div className="bg-white rounded-xl border border-slate-200 p-6">
//             <h3 className="text-sm font-bold text-slate-800 mb-6">📊 비용 구조 시각화</h3>
            
//             {[
//               { label: optionA.label, price: priceA, time: timeA, total: totalCostA, color: 'blue' },
//               { label: optionB.label, price: priceB, time: timeB, total: totalCostB, color: 'indigo' }
//             ].map((opt, i) => (
//               <div key={i} className="mb-6 last:mb-0">
//                 <div className="flex justify-between text-xs mb-2 font-bold text-slate-600">
//                   <span>{opt.label}</span>
//                   <span>{Math.round(opt.total).toLocaleString()}원</span>
//                 </div>
//                 <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden flex">
//                   <div style={{ width: `${(opt.price / maxCost) * 100}%` }} className={`h-full bg-${opt.color}-500`}></div>
//                   <div style={{ width: `${((opt.time * minuteValue) / maxCost) * 100}%` }} className="h-full bg-red-400"></div>
//                 </div>
//                 <div className="flex justify-between text-[10px] text-slate-400 mt-1">
//                   <span className={`text-${opt.color}-500`}>지출: {opt.price.toLocaleString()}</span>
//                   <span className="text-red-400">시간가치: {Math.round(opt.time * minuteValue).toLocaleString()}</span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* 4. 최종 결론 */}
//           <div className="bg-slate-900 rounded-2xl p-6 text-center shadow-lg">
//             <div className="text-2xl font-bold text-white mb-2">
//               <span className="text-yellow-400 underline decoration-4 underline-offset-4">{bestOption.label}</span> 선택!
//             </div>
            
//             <p className="text-slate-300 text-sm mb-4">
//               총 <span className="font-bold text-green-400">{Math.round(difference).toLocaleString()}원</span> 이득을 봤어요!
//             </p>

//             {breakEvenRate > 0 && Math.abs(breakEvenRate - safeHourlyRate) > 1000 && (
//               <div className="bg-white/10 p-3 rounded-lg text-xs text-slate-300 inline-block text-left">
//                 <span className="block font-bold text-yellow-200 mb-1">💡 의사결정 Tip</span>
//                 노아님의 시급이 <span className="text-white font-bold">{Math.round(breakEvenRate).toLocaleString()}원</span> 이상이라면,<br/>
//                 시간을 아끼기 위해 <span className="text-white font-bold underline">{fasterOption.label}</span>을(를) 선택하는 것이 이득입니다.
//               </div>
//             )}
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

//6번째 시도
// import React, { useState } from 'react';

// // 교통수단 카테고리 데이터
// const TRANSPORT_OPTIONS = [
//   { id: 'walk', label: '🚶 도보', defaultPrice: 0, defaultTime: 30 },
//   { id: 'bus', label: '🚌 버스', defaultPrice: 1500, defaultTime: 20 },
//   { id: 'subway', label: '🚇 지하철', defaultPrice: 1400, defaultTime: 15 },
//   { id: 'taxi', label: '🚖 택시', defaultPrice: 12000, defaultTime: 10 },
//   { id: 'train', label: '🚄 기차/KTX', defaultPrice: 8400, defaultTime: 25 },
//   { id: 'car', label: '🚗 자차', defaultPrice: 5000, defaultTime: 25 },
//   { id: 'custom', label: '✏️ 직접 입력', defaultPrice: '', defaultTime: '' },
// ];

// function App() {
//   // 1. 시급 설정 (기본값 10,320원)
//   const [hourlyRate, setHourlyRate] = useState(10320);

//   // 2. 초기 상태 설정
//   const [optionA, setOptionA] = useState({ ...TRANSPORT_OPTIONS[1], price: 1500, time: 20 });
//   const [optionB, setOptionB] = useState({ ...TRANSPORT_OPTIONS[0], price: 0, time: 40 });

//   // 공통 입력 핸들러
//   const handleInputChange = (setter, currentObj, field, value) => {
//     const newValue = value === '' ? '' : Number(value);
//     setter({ ...currentObj, [field]: newValue });
//   };

//   // 카테고리 변경 핸들러
//   const handleCategoryChange = (setter, optionId) => {
//     const selected = TRANSPORT_OPTIONS.find(opt => opt.id === optionId);
//     if (selected) {
//       setter({ 
//         ...selected, 
//         price: selected.defaultPrice === '' ? '' : selected.defaultPrice, 
//         time: selected.defaultTime === '' ? '' : selected.defaultTime
//       });
//     }
//   };

//   // 3. 계산 로직
//   const safeHourlyRate = Number(hourlyRate) || 0;
//   const minuteValue = safeHourlyRate / 60;
  
//   const calculateTotalCost = (opt) => {
//     const price = Number(opt.price) || 0;
//     const time = Number(opt.time) || 0;
//     return price + (time * minuteValue);
//   };

//   const totalCostA = calculateTotalCost(optionA);
//   const totalCostB = calculateTotalCost(optionB);

//   const difference = Math.abs(totalCostA - totalCostB);
//   const bestOption = totalCostA < totalCostB ? optionA : optionB;
  
//   // 손익분기점 및 더 빠른 수단 식별 로직
//   const priceA = Number(optionA.price) || 0;
//   const priceB = Number(optionB.price) || 0;
//   const timeA = Number(optionA.time) || 0;
//   const timeB = Number(optionB.time) || 0;

//   const priceDiff = Math.abs(priceA - priceB);
//   const timeDiff = Math.abs(timeA - timeB);
//   const breakEvenRate = timeDiff > 0 ? (priceDiff / timeDiff) * 60 : 0;
  
//   // 더 빠른 수단 찾기 (시간이 적게 걸리는 쪽)
//   const fasterOption = timeA < timeB ? optionA : optionB;
  
//   const maxCost = Math.max(totalCostA, totalCostB, 1);

//   return (
//     <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4 font-sans text-slate-900">
//       <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
        
//         {/* 헤더 */}
//         <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
//           <div>
//             <h1 className="text-xl font-bold">아낌표! 🚦</h1>
//             <p className="text-slate-400 text-xs mt-1">시간과 돈을 아끼는 똑똑한 선택</p>
//           </div>
//         </div>

//         <div className="p-6 space-y-8">
          
//           {/* 1. 시급 설정 */}
//           <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
//             <div className="flex justify-between items-center mb-2">
//               <label className="font-bold text-blue-800 text-sm">💰 나의 시급 설정</label>
//               <div className="flex items-center">
//                 <span className="font-bold text-blue-900 mr-2">₩</span>
//                 <input 
//                   type="number" 
//                   value={hourlyRate} 
//                   onChange={(e) => setHourlyRate(e.target.value === '' ? '' : Number(e.target.value))}
//                   placeholder="0"
//                   className="bg-transparent text-2xl font-black text-blue-900 w-36 text-right focus:outline-none border-b border-blue-300 placeholder-blue-200"
//                 />
//               </div>
//             </div>
//             <div className="text-right">
//               <span className="text-xs text-blue-500 font-medium bg-blue-100 px-2 py-1 rounded-full">
//                 ℹ️ 2026년 최저시급 기준: 10,320원
//               </span>
//             </div>
//           </div>

//           {/* 2. 비교 옵션 입력 */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {[ 
//               // ✨ otherState를 추가하여 상대방의 상태를 알 수 있게 함
//               { title: '옵션 A', state: optionA, setter: setOptionA, otherState: optionB },
//               { title: '옵션 B', state: optionB, setter: setOptionB, otherState: optionA }
//             ].map((box, idx) => {
//               const isWalk = box.state.id === 'walk';
//               return (
//                 <div key={idx} className="p-5 rounded-2xl border border-slate-200 bg-white hover:shadow-lg transition-all">
//                   <div className="flex justify-between items-center mb-4">
//                     <span className="text-xs font-bold text-slate-400 uppercase">{box.title}</span>
//                     <select 
//                       className="text-sm font-bold bg-slate-100 p-1 rounded-lg outline-none cursor-pointer border border-slate-200 max-w-[120px]"
//                       value={box.state.id}
//                       onChange={(e) => handleCategoryChange(box.setter, e.target.value)}
//                     >
//                       {TRANSPORT_OPTIONS.map(opt => {
//                         // ✨ 핵심 로직: 상대방이 도보이고, 현재 렌더링 중인 옵션도 도보라면 'disabled' 처리
//                         const isDisabled = box.otherState.id === 'walk' && opt.id === 'walk';
//                         return (
//                           <option key={opt.id} value={opt.id} disabled={isDisabled}>
//                             {opt.label} {isDisabled ? '(선택 불가)' : ''}
//                           </option>
//                         );
//                       })}
//                     </select>
//                   </div>

//                   <div className="space-y-4">
//                     <div>
//                       <label className="text-[10px] font-bold text-slate-400 block mb-1">비용 (원)</label>
//                       <input 
//                         type="number" 
//                         value={box.state.price} 
//                         onChange={(e) => handleInputChange(box.setter, box.state, 'price', e.target.value)}
//                         placeholder="0"
//                         disabled={isWalk}
//                         className={`w-full text-lg font-bold border-b border-slate-200 outline-none py-1 placeholder-slate-300 
//                           ${isWalk ? 'bg-slate-100 text-slate-400 cursor-not-allowed' : 'focus:border-blue-500'}`}
//                       />
//                     </div>
//                     <div>
//                       <label className="text-[10px] font-bold text-slate-400 block mb-1">소요 시간 (분)</label>
//                       <input 
//                         type="number" 
//                         value={box.state.time} 
//                         onChange={(e) => handleInputChange(box.setter, box.state, 'time', e.target.value)}
//                         placeholder="0"
//                         className="w-full text-lg font-bold border-b border-slate-200 focus:border-blue-500 outline-none py-1 placeholder-slate-300"
//                       />
//                     </div>
//                   </div>

//                   <div className="mt-4 pt-3 border-t border-dashed border-slate-200 text-right">
//                     <span className="text-xs text-slate-500 mr-2">기회비용 합계</span>
//                     <span className="font-bold text-slate-800">
//                       {Math.round(idx === 0 ? totalCostA : totalCostB).toLocaleString()}원
//                     </span>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* 3. 분석 결과 그래프 */}
//           <div className="bg-white rounded-xl border border-slate-200 p-6">
//             <h3 className="text-sm font-bold text-slate-800 mb-6">📊 비용 구조 시각화</h3>
            
//             {[
//               { label: optionA.label, price: priceA, time: timeA, total: totalCostA, color: 'blue' },
//               { label: optionB.label, price: priceB, time: timeB, total: totalCostB, color: 'indigo' }
//             ].map((opt, i) => (
//               <div key={i} className="mb-6 last:mb-0">
//                 <div className="flex justify-between text-xs mb-2 font-bold text-slate-600">
//                   <span>{opt.label}</span>
//                   <span>{Math.round(opt.total).toLocaleString()}원</span>
//                 </div>
//                 <div className="w-full h-4 bg-slate-100 rounded-full overflow-hidden flex">
//                   <div style={{ width: `${(opt.price / maxCost) * 100}%` }} className={`h-full bg-${opt.color}-500`}></div>
//                   <div style={{ width: `${((opt.time * minuteValue) / maxCost) * 100}%` }} className="h-full bg-red-400"></div>
//                 </div>
//                 <div className="flex justify-between text-[10px] text-slate-400 mt-1">
//                   <span className={`text-${opt.color}-500`}>지출: {opt.price.toLocaleString()}</span>
//                   <span className="text-red-400">시간가치: {Math.round(opt.time * minuteValue).toLocaleString()}</span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* 4. 최종 결론 */}
//           <div className="bg-slate-900 rounded-2xl p-6 text-center shadow-lg">
//             <div className="text-2xl font-bold text-white mb-2">
//               <span className="text-yellow-400 underline decoration-4 underline-offset-4">{bestOption.label}</span> 선택!
//             </div>
            
//             <p className="text-slate-300 text-sm mb-4">
//               총 <span className="font-bold text-green-400">{Math.round(difference).toLocaleString()}원</span> 이득을 봤어요!
//             </p>

//             {breakEvenRate > 0 && Math.abs(breakEvenRate - safeHourlyRate) > 1000 && (
//               <div className="bg-white/10 p-3 rounded-lg text-xs text-slate-300 inline-block text-left">
//                 <span className="block font-bold text-yellow-200 mb-1">💡 의사결정 Tip</span>
//                 노아님의 시급이 <span className="text-white font-bold">{Math.round(breakEvenRate).toLocaleString()}원</span> 이상이라면,<br/>
//                 시간을 아끼기 위해 <span className="text-white font-bold underline">{fasterOption.label}</span>을(를) 선택하는 것이 이득입니다.
//               </div>
//             )}
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

//7번째 시도
// import React, { useState, useEffect } from 'react';

// // 교통수단 카테고리 데이터
// const TRANSPORT_OPTIONS = [
//   { id: 'walk', label: '🚶 도보', defaultPrice: 0, defaultTime: 30 },
//   { id: 'bus', label: '🚌 버스', defaultPrice: 1500, defaultTime: 20 },
//   { id: 'subway', label: '🚇 지하철', defaultPrice: 1400, defaultTime: 15 },
//   { id: 'taxi', label: '🚖 택시', defaultPrice: 12000, defaultTime: 10 },
//   { id: 'train', label: '🚄 기차/KTX', defaultPrice: 8400, defaultTime: 25 },
//   { id: 'car', label: '🚗 자차', defaultPrice: 5000, defaultTime: 25 },
//   { id: 'custom', label: '✏️ 기타', defaultPrice: '', defaultTime: '' },
// ];

// function App() {
//   const [hourlyRate, setHourlyRate] = useState(10320);
//   const [optionA, setOptionA] = useState({ ...TRANSPORT_OPTIONS[1], price: 1500, time: 20 });
//   const [optionB, setOptionB] = useState({ ...TRANSPORT_OPTIONS[0], price: 0, time: 40 });
//   const [animate, setAnimate] = useState(false); // 애니메이션 상태

//   // 초기 로딩 시 애니메이션 트리거
//   useEffect(() => {
//     setAnimate(true);
//   }, []);

//   const handleInputChange = (setter, currentObj, field, value) => {
//     const newValue = value === '' ? '' : Number(value);
//     setter({ ...currentObj, [field]: newValue });
//   };

//   const handleCategoryChange = (setter, optionId) => {
//     const selected = TRANSPORT_OPTIONS.find(opt => opt.id === optionId);
//     if (selected) {
//       setter({ 
//         ...selected, 
//         price: selected.defaultPrice === '' ? '' : selected.defaultPrice, 
//         time: selected.defaultTime === '' ? '' : selected.defaultTime
//       });
//     }
//   };

//   const safeHourlyRate = Number(hourlyRate) || 0;
//   const minuteValue = safeHourlyRate / 60;
  
//   const calculateTotalCost = (opt) => {
//     const price = Number(opt.price) || 0;
//     const time = Number(opt.time) || 0;
//     return price + (time * minuteValue);
//   };

//   const totalCostA = calculateTotalCost(optionA);
//   const totalCostB = calculateTotalCost(optionB);
//   const difference = Math.abs(totalCostA - totalCostB);
//   const bestOption = totalCostA < totalCostB ? optionA : optionB;
  
//   const priceA = Number(optionA.price) || 0;
//   const priceB = Number(optionB.price) || 0;
//   const timeA = Number(optionA.time) || 0;
//   const timeB = Number(optionB.time) || 0;

//   const priceDiff = Math.abs(priceA - priceB);
//   const timeDiff = Math.abs(timeA - timeB);
//   const breakEvenRate = timeDiff > 0 ? (priceDiff / timeDiff) * 60 : 0;
//   const fasterOption = timeA < timeB ? optionA : optionB;
//   const maxCost = Math.max(totalCostA, totalCostB, 1);

//   return (
//     // ✨ 배경에 그라데이션 애니메이션 적용
//     <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4 font-sans text-slate-800">
//       <div className={`w-full max-w-2xl bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden transition-all duration-700 ease-out transform ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        
//         {/* 헤더: 모던한 다크 테마 */}
//         <div className="bg-slate-900 p-8 text-white relative overflow-hidden">
//           <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>
//           <div className="relative z-10 flex justify-between items-end">
//             <div>
//               <h1 className="text-3xl font-black tracking-tight mb-2">아낌표! <span className="text-yellow-400">⚡</span></h1>
//               <p className="text-slate-400 text-sm font-medium">시간과 돈, 당신의 최적 선택은?</p>
//             </div>
//           </div>
//         </div>

//         <div className="p-6 space-y-8">
          
//           {/* 1. 시급 설정 카드 */}
//           <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
//             <div className="flex justify-between items-center mb-3">
//               <label className="font-bold text-blue-800 text-sm uppercase tracking-wider">💰 나의 시간 가치 (시급)</label>
//               <div className="flex items-center group">
//                 <span className="font-bold text-blue-400 mr-2 text-xl">₩</span>
//                 <input 
//                   type="number" 
//                   value={hourlyRate} 
//                   onChange={(e) => setHourlyRate(e.target.value === '' ? '' : Number(e.target.value))}
//                   placeholder="0"
//                   className="bg-transparent text-3xl font-black text-blue-900 w-40 text-right focus:outline-none border-b-2 border-transparent group-hover:border-blue-300 transition-colors placeholder-blue-200"
//                 />
//               </div>
//             </div>
//             <div className="text-right">
//               <span className="text-[10px] font-bold text-blue-600 bg-white/60 px-3 py-1 rounded-full shadow-sm backdrop-blur-sm">
//                 ℹ️ 2026년 최저시급 기준: 10,320원
//               </span>
//             </div>
//           </div>

//           {/* 2. 비교 옵션 입력 (카드 디자인 개선) */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {[ 
//               { title: 'A. 선택지', state: optionA, setter: setOptionA, otherState: optionB, color: 'blue' },
//               { title: 'B. 선택지', state: optionB, setter: setOptionB, otherState: optionA, color: 'indigo' }
//             ].map((box, idx) => {
//               const isWalk = box.state.id === 'walk';
//               return (
//                 <div key={idx} className={`p-6 rounded-3xl border-2 ${idx === 0 ? 'border-blue-50 bg-blue-50/30' : 'border-indigo-50 bg-indigo-50/30'} hover:bg-white hover:border-transparent hover:shadow-xl transition-all duration-300 group`}>
//                   <div className="flex justify-between items-center mb-6">
//                     <span className={`text-xs font-black uppercase tracking-widest ${idx === 0 ? 'text-blue-400' : 'text-indigo-400'}`}>{box.title}</span>
//                     <select 
//                       className="text-sm font-bold bg-white px-3 py-1.5 rounded-lg shadow-sm border border-slate-100 outline-none cursor-pointer hover:bg-slate-50 transition-colors"
//                       value={box.state.id}
//                       onChange={(e) => handleCategoryChange(box.setter, e.target.value)}
//                     >
//                       {TRANSPORT_OPTIONS.map(opt => {
//                         const isDisabled = box.otherState.id === 'walk' && opt.id === 'walk';
//                         return (
//                           <option key={opt.id} value={opt.id} disabled={isDisabled}>
//                             {opt.label} {isDisabled ? '(중복불가)' : ''}
//                           </option>
//                         );
//                       })}
//                     </select>
//                   </div>

//                   <div className="space-y-5">
//                     <div>
//                       <label className="text-[10px] font-bold text-slate-400 block mb-1 uppercase">비용 (원)</label>
//                       <input 
//                         type="number" 
//                         value={box.state.price} 
//                         onChange={(e) => handleInputChange(box.setter, box.state, 'price', e.target.value)}
//                         placeholder="0"
//                         disabled={isWalk}
//                         className={`w-full text-xl font-bold border-b border-slate-200 bg-transparent outline-none py-1 transition-all
//                           ${isWalk ? 'text-slate-300 cursor-not-allowed border-dashed' : 'focus:border-blue-500 text-slate-700'}`}
//                       />
//                     </div>
//                     <div>
//                       <label className="text-[10px] font-bold text-slate-400 block mb-1 uppercase">소요 시간 (분)</label>
//                       <div className="relative">
//                         <input 
//                           type="number" 
//                           value={box.state.time} 
//                           onChange={(e) => handleInputChange(box.setter, box.state, 'time', e.target.value)}
//                           placeholder="0"
//                           className="w-full text-xl font-bold border-b border-slate-200 bg-transparent outline-none py-1 focus:border-blue-500 text-slate-700 transition-all"
//                         />
//                         <span className="absolute right-0 bottom-2 text-xs font-bold text-slate-300">min</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="mt-6 pt-4 border-t border-dashed border-slate-200 text-right">
//                     <span className="text-xs font-medium text-slate-400 mr-2">총 기회비용</span>
//                     <span className={`text-lg font-black ${idx === 0 ? 'text-blue-600' : 'text-indigo-600'}`}>
//                       {Math.round(idx === 0 ? totalCostA : totalCostB).toLocaleString()}원
//                     </span>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* 3. 분석 결과 그래프 (애니메이션 적용) */}
//           <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 relative overflow-hidden">
//             <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-400 to-indigo-500"></div>
//             <h3 className="text-sm font-black text-slate-800 mb-8 flex items-center gap-2">
//               <span className="text-lg">📊</span> 비용 구조 비교
//             </h3>
            
//             {[
//               { label: optionA.label, price: priceA, time: timeA, total: totalCostA, barColor: 'bg-blue-500', textColor: 'text-blue-500' },
//               { label: optionB.label, price: priceB, time: timeB, total: totalCostB, barColor: 'bg-indigo-500', textColor: 'text-indigo-500' }
//             ].map((opt, i) => (
//               <div key={i} className="mb-8 last:mb-0">
//                 <div className="flex justify-between text-xs mb-2 font-bold text-slate-500">
//                   <span>{opt.label}</span>
//                   <span className="text-slate-800">{Math.round(opt.total).toLocaleString()}원</span>
//                 </div>
//                 {/* 그래프 바 */}
//                 <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden flex relative shadow-inner">
//                   <div 
//                     style={{ width: animate ? `${(opt.price / maxCost) * 100}%` : '0%' }} 
//                     className={`h-full ${opt.barColor} transition-all duration-1000 ease-out shadow-md`}
//                   ></div>
//                   <div 
//                     style={{ width: animate ? `${((opt.time * minuteValue) / maxCost) * 100}%` : '0%' }} 
//                     className="h-full bg-red-400 transition-all duration-1000 ease-out delay-300 shadow-md opacity-80"
//                   ></div>
//                 </div>
//                 <div className="flex justify-between text-[10px] font-bold mt-2">
//                   <span className={opt.textColor}>💸 지출 {opt.price.toLocaleString()}</span>
//                   <span className="text-red-400">⏱️ 시간가치 {Math.round(opt.time * minuteValue).toLocaleString()}</span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* 4. 최종 결론 (강조형 카드) */}
//           <div className="bg-slate-900 rounded-3xl p-8 text-center shadow-2xl relative overflow-hidden group">
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
//             <div className="relative z-10">
//               <div className="text-3xl font-black text-white mb-2 drop-shadow-lg">
//                 <span className="text-yellow-400 underline decoration-4 decoration-yellow-400/30 underline-offset-4">{bestOption.label}</span> 선택!
//               </div>
              
//               <p className="text-slate-300 text-sm mb-6 font-medium">
//                 총 <span className="font-bold text-green-400 bg-green-400/10 px-2 py-0.5 rounded text-base">{Math.round(difference).toLocaleString()}원</span> 더 이득을 볼 수 있어요!"
//               </p>

//               {breakEvenRate > 0 && Math.abs(breakEvenRate - safeHourlyRate) > 1000 && (
//                 <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl text-xs text-slate-300 inline-block text-left mx-auto max-w-sm">
//                   <span className="flex items-center gap-2 font-bold text-yellow-200 mb-2 text-sm">
//                     <span>💡</span>의사결정 Tip
//                   </span>
//                   <p className="leading-relaxed">
//                     노아님의 시급이 <span className="text-white font-bold">{Math.round(breakEvenRate).toLocaleString()}원</span> 이상이라면,<br/>
//                     시간을 아끼기 위해 <span className="text-white font-bold border-b border-white/30 pb-0.5">{fasterOption.label}</span>을(를) 선택하는 것이 진짜 이득입니다.
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;



// //7번째 시도
// import React, { useState, useEffect } from 'react';

// // 교통수단 카테고리 데이터
// const TRANSPORT_OPTIONS = [
//   { id: 'walk', label: '🚶 도보', defaultPrice: 0, defaultTime: 30 },
//   { id: 'bus', label: '🚌 버스', defaultPrice: 1500, defaultTime: 20 },
//   { id: 'subway', label: '🚇 지하철', defaultPrice: 1400, defaultTime: 15 },
//   { id: 'taxi', label: '🚖 택시', defaultPrice: 12000, defaultTime: 10 },
//   { id: 'train', label: '🚄 기차/KTX', defaultPrice: 8400, defaultTime: 25 },
//   { id: 'car', label: '🚗 자차', defaultPrice: 5000, defaultTime: 25 },
//   { id: 'custom', label: '✏️ 기타', defaultPrice: '', defaultTime: '' },
// ];

// function App() {
//   const [hourlyRate, setHourlyRate] = useState(10320);
//   const [optionA, setOptionA] = useState({ ...TRANSPORT_OPTIONS[1], price: 1500, time: 20 });
//   const [optionB, setOptionB] = useState({ ...TRANSPORT_OPTIONS[0], price: 0, time: 40 });
//   const [animate, setAnimate] = useState(false); // 애니메이션 상태

//   // 초기 로딩 시 애니메이션 트리거
//   useEffect(() => {
//     setAnimate(true);
//   }, []);

//   const handleInputChange = (setter, currentObj, field, value) => {
//     const newValue = value === '' ? '' : Number(value);
//     setter({ ...currentObj, [field]: newValue });
//   };

//   const handleCategoryChange = (setter, optionId) => {
//     const selected = TRANSPORT_OPTIONS.find(opt => opt.id === optionId);
//     if (selected) {
//       setter({ 
//         ...selected, 
//         price: selected.defaultPrice === '' ? '' : selected.defaultPrice, 
//         time: selected.defaultTime === '' ? '' : selected.defaultTime
//       });
//     }
//   };

//   const safeHourlyRate = Number(hourlyRate) || 0;
//   const minuteValue = safeHourlyRate / 60;
  
//   const calculateTotalCost = (opt) => {
//     const price = Number(opt.price) || 0;
//     const time = Number(opt.time) || 0;
//     return price + (time * minuteValue);
//   };

//   const totalCostA = calculateTotalCost(optionA);
//   const totalCostB = calculateTotalCost(optionB);
//   const difference = Math.abs(totalCostA - totalCostB);
//   const bestOption = totalCostA < totalCostB ? optionA : optionB;
  
//   const priceA = Number(optionA.price) || 0;
//   const priceB = Number(optionB.price) || 0;
//   const timeA = Number(optionA.time) || 0;
//   const timeB = Number(optionB.time) || 0;

//   const priceDiff = Math.abs(priceA - priceB);
//   const timeDiff = Math.abs(timeA - timeB);
//   const breakEvenRate = timeDiff > 0 ? (priceDiff / timeDiff) * 60 : 0;
//   const fasterOption = timeA < timeB ? optionA : optionB;
//   const maxCost = Math.max(totalCostA, totalCostB, 1);

//   return (
//     // ✨ 배경에 그라데이션 애니메이션 적용
//     <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4 font-sans text-slate-800">
//       <div className={`w-full max-w-2xl bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden transition-all duration-700 ease-out transform ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        
//         {/* 헤더: 모던한 다크 테마 */}
//         <div className="bg-slate-900 p-8 text-white relative overflow-hidden">
//           <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>
//           <div className="relative z-10 flex justify-between items-end">
//             <div>
//               <h1 className="text-3xl font-black tracking-tight mb-2">아낌표! <span className="text-yellow-400">⚡</span></h1>
//               <p className="text-slate-400 text-sm font-medium">시간과 돈, 당신의 최적 선택은?</p>
//             </div>
//           </div>
//         </div>

//         <div className="p-6 space-y-8">
          
//           {/* 1. 시급 설정 카드 */}
//           <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
//             <div className="flex justify-between items-center mb-3">
//               <label className="font-bold text-blue-800 text-sm uppercase tracking-wider">💰 나의 시간 가치 (시급)</label>
//               <div className="flex items-center group">
//                 <span className="font-bold text-blue-400 mr-2 text-xl">₩</span>
//                 <input 
//                   type="number" 
//                   value={hourlyRate} 
//                   onChange={(e) => setHourlyRate(e.target.value === '' ? '' : Number(e.target.value))}
//                   placeholder="0"
//                   className="bg-transparent text-3xl font-black text-blue-900 w-40 text-right focus:outline-none border-b-2 border-transparent group-hover:border-blue-300 transition-colors placeholder-blue-200"
//                 />
//               </div>
//             </div>
//             <div className="text-right">
//               <span className="text-[10px] font-bold text-blue-600 bg-white/60 px-3 py-1 rounded-full shadow-sm backdrop-blur-sm">
//                 ℹ️ 2026년 최저시급 기준: 10,320원
//               </span>
//             </div>
//           </div>

//           {/* 2. 비교 옵션 입력 (카드 디자인 개선) */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {[ 
//               { title: 'A. 선택지', state: optionA, setter: setOptionA, otherState: optionB, color: 'blue' },
//               { title: 'B. 선택지', state: optionB, setter: setOptionB, otherState: optionA, color: 'indigo' }
//             ].map((box, idx) => {
//               const isWalk = box.state.id === 'walk';
//               return (
//                 <div key={idx} className={`p-6 rounded-3xl border-2 ${idx === 0 ? 'border-blue-50 bg-blue-50/30' : 'border-indigo-50 bg-indigo-50/30'} hover:bg-white hover:border-transparent hover:shadow-xl transition-all duration-300 group`}>
//                   <div className="flex justify-between items-center mb-6">
//                     <span className={`text-xs font-black uppercase tracking-widest ${idx === 0 ? 'text-blue-400' : 'text-indigo-400'}`}>{box.title}</span>
//                     <select 
//                       className="text-sm font-bold bg-white px-3 py-1.5 rounded-lg shadow-sm border border-slate-100 outline-none cursor-pointer hover:bg-slate-50 transition-colors"
//                       value={box.state.id}
//                       onChange={(e) => handleCategoryChange(box.setter, e.target.value)}
//                     >
//                       {TRANSPORT_OPTIONS.map(opt => {
//                         const isDisabled = box.otherState.id === 'walk' && opt.id === 'walk';
//                         return (
//                           <option key={opt.id} value={opt.id} disabled={isDisabled}>
//                             {opt.label} {isDisabled ? '(중복불가)' : ''}
//                           </option>
//                         );
//                       })}
//                     </select>
//                   </div>

//                   <div className="space-y-5">
//                     <div>
//                       <label className="text-[10px] font-bold text-slate-400 block mb-1 uppercase">비용 (원)</label>
//                       <input 
//                         type="number" 
//                         value={box.state.price} 
//                         onChange={(e) => handleInputChange(box.setter, box.state, 'price', e.target.value)}
//                         placeholder="0"
//                         disabled={isWalk}
//                         className={`w-full text-xl font-bold border-b border-slate-200 bg-transparent outline-none py-1 transition-all
//                           ${isWalk ? 'text-slate-300 cursor-not-allowed border-dashed' : 'focus:border-blue-500 text-slate-700'}`}
//                       />
//                     </div>
//                     <div>
//                       <label className="text-[10px] font-bold text-slate-400 block mb-1 uppercase">소요 시간 (분)</label>
//                       <div className="relative">
//                         <input 
//                           type="number" 
//                           value={box.state.time} 
//                           onChange={(e) => handleInputChange(box.setter, box.state, 'time', e.target.value)}
//                           placeholder="0"
//                           className="w-full text-xl font-bold border-b border-slate-200 bg-transparent outline-none py-1 focus:border-blue-500 text-slate-700 transition-all"
//                         />
//                         <span className="absolute right-0 bottom-2 text-xs font-bold text-slate-300">min</span>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="mt-6 pt-4 border-t border-dashed border-slate-200 text-right">
//                     <span className="text-xs font-medium text-slate-400 mr-2">총 기회비용</span>
//                     <span className={`text-lg font-black ${idx === 0 ? 'text-blue-600' : 'text-indigo-600'}`}>
//                       {Math.round(idx === 0 ? totalCostA : totalCostB).toLocaleString()}원
//                     </span>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* 3. 분석 결과 그래프 (애니메이션 적용) */}
//           <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 relative overflow-hidden">
//             <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-400 to-indigo-500"></div>
//             <h3 className="text-sm font-black text-slate-800 mb-8 flex items-center gap-2">
//               <span className="text-lg">📊</span> 비용 구조 비교
//             </h3>
            
//             {[
//               { label: optionA.label, price: priceA, time: timeA, total: totalCostA, barColor: 'bg-blue-500', textColor: 'text-blue-500' },
//               { label: optionB.label, price: priceB, time: timeB, total: totalCostB, barColor: 'bg-indigo-500', textColor: 'text-indigo-500' }
//             ].map((opt, i) => (
//               <div key={i} className="mb-8 last:mb-0">
//                 <div className="flex justify-between text-xs mb-2 font-bold text-slate-500">
//                   <span>{opt.label}</span>
//                   <span className="text-slate-800">{Math.round(opt.total).toLocaleString()}원</span>
//                 </div>
//                 {/* 그래프 바 */}
//                 <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden flex relative shadow-inner">
//                   <div 
//                     style={{ width: animate ? `${(opt.price / maxCost) * 100}%` : '0%' }} 
//                     className={`h-full ${opt.barColor} transition-all duration-1000 ease-out shadow-md`}
//                   ></div>
//                   <div 
//                     style={{ width: animate ? `${((opt.time * minuteValue) / maxCost) * 100}%` : '0%' }} 
//                     className="h-full bg-red-400 transition-all duration-1000 ease-out delay-300 shadow-md opacity-80"
//                   ></div>
//                 </div>
//                 <div className="flex justify-between text-[10px] font-bold mt-2">
//                   <span className={opt.textColor}>💸 지출 {opt.price.toLocaleString()}</span>
//                   <span className="text-red-400">⏱️ 시간가치 {Math.round(opt.time * minuteValue).toLocaleString()}</span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* 4. 최종 결론 (강조형 카드) */}
//           <div className="bg-slate-900 rounded-3xl p-8 text-center shadow-2xl relative overflow-hidden group">
//             <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
//             <div className="relative z-10">
//               <div className="text-3xl font-black text-white mb-2 drop-shadow-lg">
//                 <span className="text-yellow-400 underline decoration-4 decoration-yellow-400/30 underline-offset-4">{bestOption.label}</span> 선택!
//               </div>
              
//               <p className="text-slate-300 text-sm mb-6 font-medium">
//                 총 <span className="font-bold text-green-400 bg-green-400/10 px-2 py-0.5 rounded text-base">{Math.round(difference).toLocaleString()}원</span> 더 이득을 볼 수 있어요!"
//               </p>

//               {breakEvenRate > 0 && Math.abs(breakEvenRate - safeHourlyRate) > 1000 && (
//                 <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl text-xs text-slate-300 inline-block text-left mx-auto max-w-sm">
//                   <span className="flex items-center gap-2 font-bold text-yellow-200 mb-2 text-sm">
//                     <span>💡</span>의사결정 Tip
//                   </span>
//                   <p className="leading-relaxed">
//                     노아님의 시급이 <span className="text-white font-bold">{Math.round(breakEvenRate).toLocaleString()}원</span> 이상이라면,<br/>
//                     시간을 아끼기 위해 <span className="text-white font-bold border-b border-white/30 pb-0.5">{fasterOption.label}</span>을(를) 선택하는 것이 진짜 이득입니다.
//                   </p>
//                 </div>
//               )}
//             </div>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// 8번째 시도
import React, { useState, useEffect } from 'react';

// 교통수단 카테고리 데이터
const TRANSPORT_OPTIONS = [
  { id: 'walk', label: '🚶 도보', defaultPrice: 0, defaultTime: 30 },
  { id: 'bus', label: '🚌 버스', defaultPrice: 1500, defaultTime: 20 },
  { id: 'subway', label: '🚇 지하철', defaultPrice: 1400, defaultTime: 15 },
  { id: 'taxi', label: '🚖 택시', defaultPrice: 12000, defaultTime: 10 },
  { id: 'train', label: '🚄 기차/KTX', defaultPrice: 8400, defaultTime: 25 },
  { id: 'car', label: '🚗 자차', defaultPrice: 5000, defaultTime: 25 },
  { id: 'custom', label: '✏️ 기타', defaultPrice: '', defaultTime: '' },
];

function App() {
  const [hourlyRate, setHourlyRate] = useState(10320);
  const [optionA, setOptionA] = useState({ ...TRANSPORT_OPTIONS[1], price: 1500, time: 20 });
  const [optionB, setOptionB] = useState({ ...TRANSPORT_OPTIONS[0], price: 0, time: 40 });
  const [animate, setAnimate] = useState(false); // 애니메이션 상태

  // 초기 로딩 시 애니메이션 트리거
  useEffect(() => {
    setAnimate(true);
  }, []);

  // ✨ 수정됨: 음수 입력 방지 로직 추가
  const handleInputChange = (setter, currentObj, field, value) => {
    // 1. 빈 값(지우는 경우) 허용
    if (value === '') {
      setter({ ...currentObj, [field]: '' });
      return;
    }

    const numValue = Number(value);
    // 2. 0 이상인 경우에만 상태 업데이트 (음수 입력 차단)
    if (numValue >= 0) {
      setter({ ...currentObj, [field]: numValue });
    }
  };

  const handleCategoryChange = (setter, optionId) => {
    const selected = TRANSPORT_OPTIONS.find(opt => opt.id === optionId);
    if (selected) {
      setter({ 
        ...selected, 
        price: selected.defaultPrice === '' ? '' : selected.defaultPrice, 
        time: selected.defaultTime === '' ? '' : selected.defaultTime
      });
    }
  };

  const safeHourlyRate = Number(hourlyRate) || 0;
  const minuteValue = safeHourlyRate / 60;
  
  const calculateTotalCost = (opt) => {
    const price = Number(opt.price) || 0;
    const time = Number(opt.time) || 0;
    return price + (time * minuteValue);
  };

  const totalCostA = calculateTotalCost(optionA);
  const totalCostB = calculateTotalCost(optionB);
  const difference = Math.abs(totalCostA - totalCostB);
  const bestOption = totalCostA < totalCostB ? optionA : optionB;
  
  const priceA = Number(optionA.price) || 0;
  const priceB = Number(optionB.price) || 0;
  const timeA = Number(optionA.time) || 0;
  const timeB = Number(optionB.time) || 0;

  const priceDiff = Math.abs(priceA - priceB);
  const timeDiff = Math.abs(timeA - timeB);
  const breakEvenRate = timeDiff > 0 ? (priceDiff / timeDiff) * 60 : 0;
  const fasterOption = timeA < timeB ? optionA : optionB;
  const maxCost = Math.max(totalCostA, totalCostB, 1);

  return (
    // ✨ 배경에 그라데이션 애니메이션 적용
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4 font-sans text-slate-800">
      <div className={`w-full max-w-2xl bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden transition-all duration-700 ease-out transform ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        
        {/* 헤더: 모던한 다크 테마 */}
        <div className="bg-slate-900 p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full blur-3xl opacity-20 -mr-10 -mt-10"></div>
          <div className="relative z-10 flex justify-between items-end">
            <div>
              <h1 className="text-3xl font-black tracking-tight mb-2">아낌표! <span className="text-yellow-400">⚡</span></h1>
              <p className="text-slate-400 text-sm font-medium">시간과 돈, 당신의 최적 선택은?</p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-8">
          
          {/* 1. 시급 설정 카드 */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-3">
              <label className="font-bold text-blue-800 text-sm uppercase tracking-wider">💰 나의 시간 가치 (시급)</label>
              <div className="flex items-center group">
                <span className="font-bold text-blue-400 mr-2 text-xl">₩</span>
                {/* ✨ 수정됨: 시급 입력란 음수 방지 */}
                <input 
                  type="number" 
                  value={hourlyRate} 
                  onChange={(e) => {
                    const val = e.target.value;
                    // 빈 값이거나 양수일 때만 업데이트
                    if (val === '' || Number(val) >= 0) {
                      setHourlyRate(val === '' ? '' : Number(val));
                    }
                  }}
                  placeholder="0"
                  className="bg-transparent text-3xl font-black text-blue-900 w-40 text-right focus:outline-none border-b-2 border-transparent group-hover:border-blue-300 transition-colors placeholder-blue-200"
                />
              </div>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-bold text-blue-600 bg-white/60 px-3 py-1 rounded-full shadow-sm backdrop-blur-sm">
                ℹ️ 2026년 최저시급 기준: 10,320원
              </span>
            </div>
          </div>

          {/* 2. 비교 옵션 입력 (카드 디자인 개선) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[ 
              { title: 'A. 선택지', state: optionA, setter: setOptionA, otherState: optionB, color: 'blue' },
              { title: 'B. 선택지', state: optionB, setter: setOptionB, otherState: optionA, color: 'indigo' }
            ].map((box, idx) => {
              const isWalk = box.state.id === 'walk';
              return (
                <div key={idx} className={`p-6 rounded-3xl border-2 ${idx === 0 ? 'border-blue-50 bg-blue-50/30' : 'border-indigo-50 bg-indigo-50/30'} hover:bg-white hover:border-transparent hover:shadow-xl transition-all duration-300 group`}>
                  <div className="flex justify-between items-center mb-6">
                    <span className={`text-xs font-black uppercase tracking-widest ${idx === 0 ? 'text-blue-400' : 'text-indigo-400'}`}>{box.title}</span>
                    <select 
                      className="text-sm font-bold bg-white px-3 py-1.5 rounded-lg shadow-sm border border-slate-100 outline-none cursor-pointer hover:bg-slate-50 transition-colors"
                      value={box.state.id}
                      onChange={(e) => handleCategoryChange(box.setter, e.target.value)}
                    >
                      {TRANSPORT_OPTIONS.map(opt => {
                        const isDisabled = box.otherState.id === 'walk' && opt.id === 'walk';
                        return (
                          <option key={opt.id} value={opt.id} disabled={isDisabled}>
                            {opt.label} {isDisabled ? '(중복불가)' : ''}
                          </option>
                        );
                      })}
                    </select>
                  </div>

                  <div className="space-y-5">
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 block mb-1 uppercase">비용 (원)</label>
                      <input 
                        type="number" 
                        value={box.state.price} 
                        onChange={(e) => handleInputChange(box.setter, box.state, 'price', e.target.value)}
                        placeholder="0"
                        disabled={isWalk}
                        className={`w-full text-xl font-bold border-b border-slate-200 bg-transparent outline-none py-1 transition-all
                          ${isWalk ? 'text-slate-300 cursor-not-allowed border-dashed' : 'focus:border-blue-500 text-slate-700'}`}
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-bold text-slate-400 block mb-1 uppercase">소요 시간 (분)</label>
                      <div className="relative">
                        <input 
                          type="number" 
                          value={box.state.time} 
                          onChange={(e) => handleInputChange(box.setter, box.state, 'time', e.target.value)}
                          placeholder="0"
                          className="w-full text-xl font-bold border-b border-slate-200 bg-transparent outline-none py-1 focus:border-blue-500 text-slate-700 transition-all"
                        />
                        <span className="absolute right-0 bottom-2 text-xs font-bold text-slate-300">min</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-dashed border-slate-200 text-right">
                    <span className="text-xs font-medium text-slate-400 mr-2">총 기회비용</span>
                    <span className={`text-lg font-black ${idx === 0 ? 'text-blue-600' : 'text-indigo-600'}`}>
                      {Math.round(idx === 0 ? totalCostA : totalCostB).toLocaleString()}원
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 3. 분석 결과 그래프 (애니메이션 적용) */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-blue-400 to-indigo-500"></div>
            <h3 className="text-sm font-black text-slate-800 mb-8 flex items-center gap-2">
              <span className="text-lg">📊</span> 비용 구조 비교
            </h3>
            
            {[
              { label: optionA.label, price: priceA, time: timeA, total: totalCostA, barColor: 'bg-blue-500', textColor: 'text-blue-500' },
              { label: optionB.label, price: priceB, time: timeB, total: totalCostB, barColor: 'bg-indigo-500', textColor: 'text-indigo-500' }
            ].map((opt, i) => (
              <div key={i} className="mb-8 last:mb-0">
                <div className="flex justify-between text-xs mb-2 font-bold text-slate-500">
                  <span>{opt.label}</span>
                  <span className="text-slate-800">{Math.round(opt.total).toLocaleString()}원</span>
                </div>
                {/* 그래프 바 */}
                <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden flex relative shadow-inner">
                  <div 
                    style={{ width: animate ? `${(opt.price / maxCost) * 100}%` : '0%' }} 
                    className={`h-full ${opt.barColor} transition-all duration-1000 ease-out shadow-md`}
                  ></div>
                  <div 
                    style={{ width: animate ? `${((opt.time * minuteValue) / maxCost) * 100}%` : '0%' }} 
                    className="h-full bg-red-400 transition-all duration-1000 ease-out delay-300 shadow-md opacity-80"
                  ></div>
                </div>
                <div className="flex justify-between text-[10px] font-bold mt-2">
                  <span className={opt.textColor}>💸 지출 {opt.price.toLocaleString()}</span>
                  <span className="text-red-400">⏱️ 시간가치 {Math.round(opt.time * minuteValue).toLocaleString()}</span>
                </div>
              </div>
            ))}
          </div>

          {/* 4. 최종 결론 (강조형 카드) */}
          <div className="bg-slate-900 rounded-3xl p-8 text-center shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="text-3xl font-black text-white mb-2 drop-shadow-lg">
                <span className="text-yellow-400 underline decoration-4 decoration-yellow-400/30 underline-offset-4">{bestOption.label}</span> 선택!
              </div>
              
              <p className="text-slate-300 text-sm mb-6 font-medium">
                총 <span className="font-bold text-green-400 bg-green-400/10 px-2 py-0.5 rounded text-base">{Math.round(difference).toLocaleString()}원</span> 더 이득을 볼 수 있어요!
              </p>

              {breakEvenRate > 0 && Math.abs(breakEvenRate - safeHourlyRate) > 1000 && (
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl text-xs text-slate-300 inline-block text-left mx-auto max-w-sm">
                  <span className="flex items-center gap-2 font-bold text-yellow-200 mb-2 text-sm">
                    <span>💡</span> 의사결정 Tip
                  </span>
                  <p className="leading-relaxed">
                    노아님의 시급이 <span className="text-white font-bold">{Math.round(breakEvenRate).toLocaleString()}원</span> 이상이라면,<br/>
                    시간을 아끼기 위해 <span className="text-white font-bold border-b border-white/30 pb-0.5">{fasterOption.label}</span>을(를) 선택하는 것이 진짜 이득입니다.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
